const params = new URLSearchParams(window.location.search);
const moduleId = params.has("id") ? Number(params.get("id")) : 0;
const moduleData = modules.find((item) => item.id === moduleId) || modules[0];

const isWordDocument = (href) => /\.(docx?|DOCX?)$/.test(href);

const getResourceHref = (resource) => {
  if (!isWordDocument(resource.href)) {
    return resource.href;
  }

  return `visor-word.html?file=${encodeURIComponent(resource.href)}&title=${encodeURIComponent(resource.label)}&module=${moduleId}`;
};

const getResourceLinkHtml = (resource) => `
  <a class="resource-link" href="${getResourceHref(resource)}" target="_blank" rel="noopener noreferrer">
    <span>${resource.label}</span>
    <small>${resource.type}</small>
  </a>
`;

const getResourcesHtml = (resources) => {
  return `
    <div class="resource-list">
      ${resources.filter((resource) => !ForoContentStore.isHidden(resource.href)).map(getResourceLinkHtml).join("")}
    </div>
  `;
};

const moduleSections = [
  {
    title: "Contenidos clave",
    description: "Resumen del tema, ideas principales y guia de estudio del modulo."
  },
  {
    title: "Foros y comunidad",
    description: "Espacio para compartir dudas, comentarios y reflexiones con el grupo."
  },
  {
    title: "Lecturas, bibliografia y enlaces",
    description: "Recursos complementarios, referencias y enlaces recomendados."
  },
  {
    title: "Ficha modulo",
    description: "Ficha de trabajo principal asociada al modulo."
  },
  {
    title: "Materiales y ejercicios",
    description: "Plantillas, documentos descargables y ejercicios practicos."
  },
  {
    title: "Actividades",
    description: "Actividades practicas del modulo.",
    optional: true
  },
  {
    title: "Rubrica",
    description: "Rubrica de correccion del modulo.",
    optional: true
  },
  {
    title: "Evaluacion",
    description: "Actividad final, cuestionario o entrega asociada a este modulo."
  }
];

document.getElementById("moduleType").textContent = `Actividad: ${moduleData.activityType}`;
document.getElementById("moduleTitle").textContent = moduleData.title;
document.getElementById("moduleDescription").textContent = moduleData.description;
document.getElementById("moduleVideo").textContent = moduleData.videoText;
document.title = `${moduleData.title} | Humanitasforoms.org`;

document.getElementById("moduleSections").innerHTML = moduleSections
  .filter((section) => {
    if (!section.optional) {
      return true;
    }

    return Boolean(moduleData.sections?.[section.title]?.resources?.length || ForoContentStore.getSectionResources(moduleId, section.title).length);
  })
  .map((section) => {
    const customSection = moduleData.sections?.[section.title] || {};
    const baseResources = customSection.resources || [];
    const customResources = ForoContentStore.getSectionResources(moduleId, section.title);
    const resources = [...baseResources, ...customResources].filter((resource) => !ForoContentStore.isHidden(resource.href));
    const resourcesHtml = resources.length ? getResourcesHtml(resources) : "";

    return `
      <article class="module-section">
        <span class="module-section__icon" aria-hidden="true"></span>
        <div class="module-section__content">
          <h3>${section.title}</h3>
          <p>${customSection.description || section.description}</p>
          ${resourcesHtml}
        </div>
        ${resources.length ? "" : '<a class="button button--light" href="#">Abrir</a>'}
      </article>
    `;
  })
  .join("");
