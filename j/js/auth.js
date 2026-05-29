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

  const moduleAccessDays = 14;
  const moduleAccessMs = moduleAccessDays * 24 * 60 * 60 * 1000;

  const getStudentIndex = (dni) => {
    const students = getStudents();
    const index = students.findIndex((student) => student.dni === dni);
    return { students, index };
  };

  const getModuleAccessState = (moduleId, { start = false } = {}) => {
    const session = getSession();

    if (session?.role !== "student") {
      return {
        locked: false,
        role: session?.role || null
      };
    }

    const { students, index } = getStudentIndex(session.dni);

    if (index === -1) {
      return {
        locked: true,
        message: "No se ha encontrado el registro de esta alumna."
      };
    }

    const moduleKey = String(moduleId);
    const student = students[index];
    student.moduleAccess = student.moduleAccess || {};

    if (!student.moduleAccess[moduleKey] && start) {
      student.moduleAccess[moduleKey] = {
        startedAt: new Date().toISOString()
      };
      students[index] = student;
      saveStudents(students);
    }

    const access = student.moduleAccess[moduleKey];

    if (!access) {
      return {
        locked: false,
        started: false,
        remainingDays: moduleAccessDays
      };
    }

    const startedAt = new Date(access.startedAt);
    const expiresAt = new Date(startedAt.getTime() + moduleAccessMs);
    const now = new Date();
    const remainingMs = expiresAt.getTime() - now.getTime();

    return {
      locked: remainingMs <= 0,
      started: true,
      startedAt: access.startedAt,
      expiresAt: expiresAt.toISOString(),
      remainingDays: Math.max(0, Math.ceil(remainingMs / (24 * 60 * 60 * 1000))),
      message: remainingMs <= 0 ? "El plazo de 2 semanas de este modulo ya ha finalizado." : ""
    };
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
    getModuleAccessState,
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
