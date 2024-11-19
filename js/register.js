document.addEventListener("DOMContentLoaded", () => {
  const showPasswordButton = document.getElementById("show-password");
  const passwordInput = document.getElementById("password");
  let isPasswordShown = true;

  showPasswordButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (isPasswordShown) {
      passwordInput.type = "text";
      showPasswordButton.src = "../public/close-eye.svg";
    } else {
      passwordInput.type = "password";
      showPasswordButton.src = "../public/open-eye.svg";
    }
    isPasswordShown = !isPasswordShown;
  });

  const showConfirmPasswordButton = document.getElementById(
    "show-confirm-password"
  );
  const confirmPasswordInput = document.getElementById("confirm-password");
  let isConfirmPasswordShown = true;

  showConfirmPasswordButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (isConfirmPasswordShown) {
      confirmPasswordInput.type = "text";
      showConfirmPasswordButton.src = "../public/close-eye.svg";
    } else {
      confirmPasswordInput.type = "password";
      showConfirmPasswordButton.src = "../public/open-eye.svg";
    }
    isConfirmPasswordShown = !isConfirmPasswordShown;
  });

  const form = document.getElementById("login-form");
  const errorEl = document.getElementById("error");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const name = document.getElementById("name").value.trim();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.map((entry) => entry.email === email);
    user = user[0] ? user[0] : null;

    if (user) {
      errorEl.textContent = "Email already in use";
      return;
    }

    const newUser = {
      email,
      password,
      name,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    window.location.href = "login.html";
  });
});
