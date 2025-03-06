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

document.getElementById("separator-line").onclick = function() {
  window.location.href =
		"https://sopossible.sp.edu.sg/courses/schools/soc/applied-ai-analytics"
}

const titleVariations = [
	"hi! i'm Jerome...",
  "i do machine learning...",
  "and full-stack development!",
	"email: lokejer@gmail.com;",
]

// INTRO SECTION TYPEWRITER EFFECT 
let index = 0
let char_index = 0
let isDeleting = false

const titleText = document.getElementById("title-text")

function typewriterEffect() {
	const currentText = titleVariations[index]

	if (!isDeleting) {
		// Add one character at a time
		titleText.innerText = currentText.slice(0, char_index + 1)
		char_index++

		// If the entire word is typed, pause and start deleting
		if (char_index === currentText.length) {
			isDeleting = true
			setTimeout(typewriterEffect, 1600) // Pause for a while before deleting
			return
		}
	} else {

		// delete the entire word after typing
		titleText.innerText = ""
		char_index = 0

		// after deleting, move to the next variation
		isDeleting = false
		index = (index + 1) % titleVariations.length
	}

	// adjust typing speed
	let speed = isDeleting ? 140 : 160
	setTimeout(typewriterEffect, speed)
}

typewriterEffect()