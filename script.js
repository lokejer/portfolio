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

const titleVariations = [
  "Hi! I'm Jerome.",
  "Hi! I'm lokejer@gmail.com",
  "Hi! I'm @jero00o"

  // "你好! I'm Jerome.",
]

let index = 0
function rotateIntroText() {
  const titleText = document.getElementById("title-text")
  
  titleText.innerText = titleVariations[index]

  index = (index + 1) % titleVariations.length
}

// run function every 2s indefinitely
setInterval(rotateIntroText, 2400)