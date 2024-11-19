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

  const form = document.getElementById("login-form");
  const errorEl = document.getElementById("error");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find((entry) => entry.email === email);

    if (!user) {
      errorEl.textContent = "User not found!";
      return;
    }

    if (user.password !== password) {
      console.log(user.password, password);
      errorEl.textContent = "Incorrect password!";
      return;
    }

    const { password: _, ...session } = user;
    localStorage.setItem("session", JSON.stringify(session));
    //  TODO: PROPER account - add name/etc to register and take store everything on the account - user saved stuff imported stuff etc
    window.location.href = "profile.html";
  });
});
