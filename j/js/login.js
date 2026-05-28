const message = document.getElementById("accessMessage");
const studentLoginForm = document.getElementById("studentLoginForm");
const studentRegisterForm = document.getElementById("studentRegisterForm");
const technicalLoginForm = document.getElementById("technicalLoginForm");
const tabs = document.querySelectorAll("[data-access-tab]");

const setMessage = (text, isError = false) => {
  message.textContent = text;
  message.classList.toggle("form-message--error", isError);
};

const showForm = (type) => {
  studentLoginForm.classList.toggle("is-hidden", type !== "student");
  studentRegisterForm.classList.add("is-hidden");
  technicalLoginForm.classList.toggle("is-hidden", type !== "technical");

  tabs.forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.accessTab === type);
  });

  setMessage("");
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => showForm(tab.dataset.accessTab));
});

document.getElementById("showRegisterButton").addEventListener("click", () => {
  studentLoginForm.classList.add("is-hidden");
  studentRegisterForm.classList.remove("is-hidden");
  setMessage("");
});

document.getElementById("showLoginButton").addEventListener("click", () => {
  studentRegisterForm.classList.add("is-hidden");
  studentLoginForm.classList.remove("is-hidden");
  setMessage("");
});

studentLoginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  try {
    ForoAuth.loginStudent({
      dni: document.getElementById("studentDni").value,
      password: document.getElementById("studentPassword").value
    });
    window.location.href = "index.html";
  } catch (error) {
    setMessage(error.message, true);
  }
});

studentRegisterForm.addEventListener("submit", (event) => {
  event.preventDefault();

  try {
    ForoAuth.registerStudent({
      name: document.getElementById("studentName").value,
      dni: document.getElementById("registerDni").value,
      password: document.getElementById("registerPassword").value
    });
    setMessage("Usuario registrado. Ya puedes iniciar sesión.");
    studentRegisterForm.reset();
    studentRegisterForm.classList.add("is-hidden");
    studentLoginForm.classList.remove("is-hidden");
    document.getElementById("studentDni").focus();
  } catch (error) {
    setMessage(error.message, true);
  }
});

technicalLoginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  try {
    ForoAuth.loginTechnical({
      user: document.getElementById("technicalUser").value,
      password: document.getElementById("technicalPassword").value
    });
    window.location.href = "admin.html";
  } catch (error) {
    setMessage(error.message, true);
  }
});
