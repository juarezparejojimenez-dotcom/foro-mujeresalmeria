(function () {
  const sessionKey = "foroms.session";
  const studentsKey = "foroms.students";
  const technicalCredentials = {
    user: "Foromujeres",
    password: "profes20"
  };

  const normalizeDni = (dni) => dni.trim().toUpperCase().replace(/\s+/g, "");

  const getStudents = () => JSON.parse(localStorage.getItem(studentsKey) || "[]");

  const saveStudents = (students) => {
    localStorage.setItem(studentsKey, JSON.stringify(students));
  };

  const setSession = (session) => {
    localStorage.setItem(sessionKey, JSON.stringify(session));
  };

  const getSession = () => JSON.parse(localStorage.getItem(sessionKey) || "null");

  const clearSession = () => {
    localStorage.removeItem(sessionKey);
  };

  const registerStudent = ({ name, dni, password }) => {
    const normalizedDni = normalizeDni(dni);
    const students = getStudents();

    if (students.some((student) => student.dni === normalizedDni)) {
      throw new Error("Este DNI ya tiene acceso creado.");
    }

    const student = {
      name: name.trim(),
      dni: normalizedDni,
      password
    };

    students.push(student);
    saveStudents(students);
  };

  const loginStudent = ({ dni, password }) => {
    const normalizedDni = normalizeDni(dni);
    const student = getStudents().find((item) => item.dni === normalizedDni && item.password === password);

    if (!student) {
      throw new Error("DNI o contrasena incorrectos.");
    }

    setSession({ role: "student", name: student.name, dni: student.dni });
  };

  const loginTechnical = ({ user, password }) => {
    if (user.trim().toLowerCase() !== technicalCredentials.user.toLowerCase() || password !== technicalCredentials.password) {
      throw new Error("Usuario tecnico o codigo incorrecto.");
    }

    setSession({ role: "technical", name: "Equipo tecnico" });
  };

  const requireAuth = () => {
    const session = getSession();
    const requiredRole = document.body.dataset.requiredRole;

    if (!session) {
      window.location.href = "login.html";
      return null;
    }

    if (requiredRole && session.role !== requiredRole) {
      window.location.href = session.role === "technical" ? "admin.html" : "index.html";
      return null;
    }

    document.body.classList.add("is-authenticated");
    return session;
  };

  const bindLogout = () => {
    document.querySelectorAll("[data-logout]").forEach((button) => {
      button.addEventListener("click", () => {
        clearSession();
        window.location.href = "login.html";
      });
    });
  };

  const applyRoleVisibility = () => {
    const session = getSession();

    document.querySelectorAll(".technical-only").forEach((element) => {
      element.hidden = session?.role !== "technical";
    });
  };

  window.ForoAuth = {
    clearSession,
    getSession,
    loginStudent,
    loginTechnical,
    registerStudent,
    requireAuth,
    bindLogout
  };

  document.addEventListener("DOMContentLoaded", () => {
    if (document.body.matches("[data-requires-auth]")) {
      requireAuth();
    }

    bindLogout();
    applyRoleVisibility();
  });
})();
