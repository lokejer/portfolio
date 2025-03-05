function showSidebar() {
  document.querySelector(".sidebar").style.display = "block"
}

function hideSidebar() {
  document.querySelector(".sidebar").style.display = "none"
}

const logo = document.querySelector(".logo")
logo.onclick = function() {
  window.location.href = "index.html"
}