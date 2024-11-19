document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("confirm-logout").addEventListener("click", () => {
    localStorage.removeItem("session");
    window.location.replace("../login.html");
  });
});
