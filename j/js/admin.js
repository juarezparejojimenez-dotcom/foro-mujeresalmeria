const session = ForoAuth.getSession();
const sections = [
  "Contenidos clave",
  "Foros y comunidad",
  "Lecturas, bibliografia y enlaces",
  "Materiales y ejercicios",
  "Ficha modulo",
  "Actividades",
  "Rubrica",
  "Evaluacion"
];

const adminModule = document.getElementById("adminModule");
const manageModule = document.getElementById("manageModule");
const adminSection = document.getElementById("adminSection");
const adminMessage = document.getElementById("adminMessage");
const adminResourceList = document.getElementById("adminResourceList");
const adminSaveButton = document.getElementById("adminSaveButton");
const adminCancelEdit = document.getElementById("adminCancelEdit");
let editingResourceId = null;

document.getElementById("technicalName").textContent = session?.name || "Equipo tecnico";

const setMessage = (text, isError = false) => {
  adminMessage.textContent = text;
  adminMessage.classList.toggle("form-message--error", isError);
};

const fillSelect = (select, options, getValue, getLabel) => {
  select.innerHTML = options
    .map((option) => `<option value="${getValue(option)}">${getLabel(option)}</option>`)
    .join("");
};

fillSelect(adminModule, modules, (module) => module.id, (module) => module.title);
fillSelect(manageModule, modules, (module) => module.id, (module) => module.title);
fillSelect(adminSection, sections, (section) => section, (section) => section);

const getBaseResources = (moduleData) => {
  return sections.flatMap((section) => {
    const resources = moduleData.sections?.[section]?.resources || [];
    return resources.map((resource) => ({ ...resource, section, custom: false }));
  });
};

const getManageResources = () => {
  const moduleId = Number(manageModule.value);
  const moduleData = modules.find((module) => module.id === moduleId);
  const baseResources = getBaseResources(moduleData);
  const customResources = ForoContentStore.getCustomResources()
    .filter((resource) => Number(resource.moduleId) === moduleId)
    .map((resource) => ({ ...resource, custom: true }));

  return [...baseResources, ...customResources];
};

const renderResources = () => {
  const resources = getManageResources();

  if (!resources.length) {
    adminResourceList.innerHTML = "<p>No hay contenidos para gestionar en este modulo.</p>";
    return;
  }

  adminResourceList.innerHTML = resources
    .map((resource) => {
      const hidden = ForoContentStore.isHidden(resource.href);
      const action = resource.custom
        ? `
          <div class="hero-actions">
            <button class="button button--light" type="button" data-edit-custom="${resource.id}">Modificar</button>
            <button class="button button--light" type="button" data-delete-custom="${resource.id}">Borrar</button>
          </div>
        `
        : `<button class="button button--light" type="button" data-toggle-base="${resource.href}">${hidden ? "Mostrar" : "Ocultar"}</button>`;

      return `
        <div class="admin-resource">
          <div>
            <small>${resource.section} · ${resource.type}</small>
            <strong>${resource.label}</strong>
            <span>${resource.custom ? "Subido desde el panel" : hidden ? "Oculto para alumnas" : "Contenido base"}</span>
          </div>
          ${action}
        </div>
      `;
    })
    .join("");
};

const readFileAsDataUrl = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("No se pudo leer el archivo."));
    reader.readAsDataURL(file);
  });
};

document.getElementById("adminContentForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  const file = document.getElementById("adminFile").files[0];
  const hrefInput = document.getElementById("adminHref").value.trim();
  const currentResource = editingResourceId
    ? ForoContentStore.getCustomResources().find((resource) => resource.id === editingResourceId)
    : null;

  if (!file && !hrefInput && !currentResource) {
    setMessage("Anade un enlace o selecciona un archivo.", true);
    return;
  }

  try {
    const href = file ? await readFileAsDataUrl(file) : hrefInput || currentResource.href;
    const resourceData = {
      moduleId: Number(adminModule.value),
      section: adminSection.value,
      label: document.getElementById("adminLabel").value.trim(),
      type: document.getElementById("adminType").value,
      href
    };

    if (editingResourceId) {
      ForoContentStore.updateCustomResource(editingResourceId, resourceData);
      editingResourceId = null;
      adminSaveButton.textContent = "Guardar contenido";
      adminCancelEdit.classList.add("is-hidden");
      setMessage("Contenido modificado.");
    } else {
      ForoContentStore.addCustomResource(resourceData);
      setMessage("Contenido guardado.");
    }

    event.target.reset();
    manageModule.value = adminModule.value;
    renderResources();
  } catch (error) {
    setMessage(error.message, true);
  }
});

manageModule.addEventListener("change", renderResources);

adminResourceList.addEventListener("click", (event) => {
  const deleteButton = event.target.closest("[data-delete-custom]");
  const editButton = event.target.closest("[data-edit-custom]");
  const toggleButton = event.target.closest("[data-toggle-base]");

  if (editButton) {
    const resource = ForoContentStore.getCustomResources().find((item) => item.id === editButton.dataset.editCustom);

    if (!resource) {
      return;
    }

    editingResourceId = resource.id;
    adminModule.value = resource.moduleId;
    adminSection.value = resource.section;
    document.getElementById("adminLabel").value = resource.label;
    document.getElementById("adminType").value = resource.type;
    document.getElementById("adminHref").value = resource.href.startsWith("data:") ? "" : resource.href;
    document.getElementById("adminFile").value = "";
    adminSaveButton.textContent = "Guardar cambios";
    adminCancelEdit.classList.remove("is-hidden");
    setMessage("Editando contenido subido.");
  }

  if (deleteButton) {
    ForoContentStore.deleteCustomResource(deleteButton.dataset.deleteCustom);
    if (editingResourceId === deleteButton.dataset.deleteCustom) {
      editingResourceId = null;
      adminSaveButton.textContent = "Guardar contenido";
      adminCancelEdit.classList.add("is-hidden");
      document.getElementById("adminContentForm").reset();
    }
    renderResources();
    setMessage("Contenido borrado.");
  }

  if (toggleButton) {
    const href = toggleButton.dataset.toggleBase;

    if (ForoContentStore.isHidden(href)) {
      ForoContentStore.showResource(href);
      setMessage("Contenido visible para alumnas.");
    } else {
      ForoContentStore.hideResource(href);
      setMessage("Contenido oculto para alumnas.");
    }

    renderResources();
  }
});

adminCancelEdit.addEventListener("click", () => {
  editingResourceId = null;
  adminSaveButton.textContent = "Guardar contenido";
  adminCancelEdit.classList.add("is-hidden");
  document.getElementById("adminContentForm").reset();
  setMessage("");
});

renderResources();
