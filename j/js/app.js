const modulesGrid = document.getElementById("modulesGrid");

modules.forEach((module) => {
  const accessState = window.ForoAuth?.getModuleAccessState(module.id);
  const accessText = accessState?.role === "technical"
    ? "Acceso tecnico"
    : accessState?.locked
    ? "Plazo finalizado"
    : accessState?.started
      ? `${accessState.remainingDays} dia${accessState.remainingDays === 1 ? "" : "s"} restantes`
      : "2 semanas desde el inicio";
  const actionHtml = accessState?.locked
    ? '<span class="button button--disabled" aria-disabled="true">Bloqueado</span>'
    : `<a class="button" href="modulo.html?id=${module.id}">Entrar</a>`;
  const card = document.createElement("article");
  card.className = `module-card${accessState?.locked ? " module-card--locked" : ""}`;
  card.innerHTML = `
    <div>
      <span class="module-card__badge">Actividad: ${module.activityType.toLowerCase()}</span>
      <h3>${module.title}</h3>
      <p>${module.description}</p>
      <p class="module-card__access">${accessText}</p>
    </div>
    ${actionHtml}
  `;

  modulesGrid.appendChild(card);
});
