document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("passwordInput");
  const showIcon = document.getElementById("showIcon");
  const hideIcon = document.getElementById("hideIcon");

  showIcon.addEventListener("click", function () {
    passwordInput.type = "text";
    showIcon.style.display = "none";
    hideIcon.style.display = "inline";
  });

  hideIcon.addEventListener("click", function () {
    passwordInput.type = "password";
    hideIcon.style.display = "none";
    showIcon.style.display = "inline";
  });
});
