(function () {
  const customResourcesKey = "foroms.customResources";
  const hiddenResourcesKey = "foroms.hiddenResources";

  const getCustomResources = () => JSON.parse(localStorage.getItem(customResourcesKey) || "[]");
  const getHiddenResources = () => JSON.parse(localStorage.getItem(hiddenResourcesKey) || "[]");

  const saveCustomResources = (resources) => {
    localStorage.setItem(customResourcesKey, JSON.stringify(resources));
  };

  const saveHiddenResources = (resources) => {
    localStorage.setItem(hiddenResourcesKey, JSON.stringify(resources));
  };

  const getSectionResources = (moduleId, sectionTitle) => {
    return getCustomResources().filter((resource) => {
      return Number(resource.moduleId) === Number(moduleId) && resource.section === sectionTitle;
    });
  };

  const addCustomResource = (resource) => {
    const resources = getCustomResources();
    const nextResource = {
      ...resource,
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      custom: true
    };

    resources.push(nextResource);
    saveCustomResources(resources);
    return nextResource;
  };

  const deleteCustomResource = (id) => {
    saveCustomResources(getCustomResources().filter((resource) => resource.id !== id));
  };

  const updateCustomResource = (id, updates) => {
    saveCustomResources(getCustomResources().map((resource) => {
      if (resource.id !== id) {
        return resource;
      }

      return { ...resource, ...updates, id, custom: true };
    }));
  };

  const hideResource = (href) => {
    const hiddenResources = getHiddenResources();

    if (!hiddenResources.includes(href)) {
      hiddenResources.push(href);
      saveHiddenResources(hiddenResources);
    }
  };

  const showResource = (href) => {
    saveHiddenResources(getHiddenResources().filter((item) => item !== href));
  };

  const isHidden = (href) => getHiddenResources().includes(href);

  window.ForoContentStore = {
    addCustomResource,
    deleteCustomResource,
    getCustomResources,
    getHiddenResources,
    getSectionResources,
    hideResource,
    isHidden,
    showResource,
    updateCustomResource
  };
})();
