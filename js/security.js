document.addEventListener("DOMContentLoaded", () => {
  const session = JSON.parse(localStorage.getItem("session"));
  if (!session) {
    window.location.replace("login.html");
    return;
  }

  const emailInput = document.getElementById("email");
  emailInput.value = session.email;

  const emailForm = document.getElementById("email-form");
  emailForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newEmail = emailInput.value.trim();

    if (newEmail === session.email) {
      alert("Please enter a different email address.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some((user) => user.email === newEmail)) {
      alert("This email is already in use.");
      return;
    }

    const userIndex = users.findIndex((user) => user.email === session.email);

    const updatedUser = {
      ...users[userIndex],
      email: newEmail,
    };

    users[userIndex] = updatedUser;
    localStorage.setItem("users", JSON.stringify(users));

    const { password: _, ...sessionData } = updatedUser;
    localStorage.setItem("session", JSON.stringify(sessionData));

    alert("Email updated successfully!");
  });

  const passwordForm = document.getElementById("password-form");
  passwordForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const oldPassword = document.getElementById("old-password").value;
    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentUser = users.find((user) => user.email === session.email);

    if (currentUser.password !== oldPassword) {
      alert("Current password is incorrect.");
      return;
    }

    if (newPassword.length < 6) {
      alert("New password must be at least 6 characters long.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("New passwords do not match.");
      return;
    }

    const userIndex = users.findIndex((user) => user.email === session.email);
    users[userIndex].password = newPassword;
    localStorage.setItem("users", JSON.stringify(users));

    passwordForm.reset();
  });
});
