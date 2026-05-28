const modulesGrid = document.getElementById("modulesGrid");

modules.forEach((module) => {
  const card = document.createElement("article");
  card.className = "module-card";
  card.innerHTML = `
    <div>
      <span class="module-card__badge">Actividad: ${module.activityType.toLowerCase()}</span>
      <h3>${module.title}</h3>
      <p>${module.description}</p>
    </div>
    <a class="button" href="modulo.html?id=${module.id}">Entrar</a>
  `;

  modulesGrid.appendChild(card);
});
