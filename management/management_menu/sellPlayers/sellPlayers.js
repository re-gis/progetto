// JavaScript for opening and closing the sidebar
const sidebar = document.getElementById("sidebar");
const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", function () {
  sidebar.classList.toggle("open");
});