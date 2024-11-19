document.addEventListener("DOMContentLoaded", () => {
  const session = JSON.parse(localStorage.getItem("session"));
  if (!session) {
    window.location.replace("login.html");
    return;
  }

  const nameInput = document.getElementById("name");
  const bioInput = document.getElementById("bio");

  nameInput.value = session.name || "";
  bioInput.value = session.bio || "";

  const form = document.getElementById("profile-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userIndex = users.findIndex((user) => user.email === session.email);

    const updatedUser = {
      ...users[userIndex],
      name: nameInput.value.trim(),
      bio: bioInput.value.trim(),
    };

    users[userIndex] = updatedUser;
    localStorage.setItem("users", JSON.stringify(users));

    const { password: _, ...sessionData } = updatedUser;
    localStorage.setItem("session", JSON.stringify(sessionData));

    alert("Profile updated successfully!");
  });
});
