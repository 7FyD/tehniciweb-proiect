document.addEventListener("DOMContentLoaded", () => {
  const session = JSON.parse(localStorage.getItem("session"));
  if (!session) return;
  const authLinks = document.getElementsByClassName("auth");
  const authLinksArray = [...authLinks];
  authLinksArray.forEach((link) => {
    link.href = "profile.html";
    link.textContent = session.name;
  });
});
