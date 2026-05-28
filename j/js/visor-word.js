const params = new URLSearchParams(window.location.search);
const file = params.get("file");
const title = params.get("title") || "Documento Word";
const documentTitle = document.getElementById("documentTitle");
const documentStatus = document.getElementById("documentStatus");
const documentContent = document.getElementById("documentContent");
const backToModule = document.getElementById("backToModule");
const moduleId = params.get("module");

documentTitle.textContent = title;
document.title = `${title} | Humanitasforoms.org`;

if (moduleId !== null) {
  backToModule.href = `modulo.html?id=${encodeURIComponent(moduleId)}`;
}

const showError = (message) => {
  documentStatus.textContent = message;
  documentStatus.classList.add("word-viewer__status--error");
};

if (!file) {
  showError("No se ha indicado ningun documento para abrir.");
} else if (!window.mammoth) {
  showError("No se ha podido cargar el visor de Word. Revisa la conexion a internet y vuelve a intentarlo.");
} else {
  fetch(file)
    .then((response) => {
      if (!response.ok) {
        throw new Error("No se pudo abrir el archivo.");
      }

      return response.arrayBuffer();
    })
    .then((arrayBuffer) => mammoth.convertToHtml({ arrayBuffer }))
    .then((result) => {
      documentContent.innerHTML = result.value;
      documentStatus.hidden = true;
    })
    .catch(() => {
      showError("El navegador no ha podido previsualizar este Word. Abre la web desde un servidor local para verlo sin descargar.");
    });
}
