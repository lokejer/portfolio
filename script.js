const titleVariations = [
	"> jerome loke",
	"> MLOps",
	"> Web Development",
	"> lokejer@gmail.com",
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
			setTimeout(typewriterEffect, index === 3 ? 5000 : 1400) // pause before deleting
			return
		}
	} else {
		titleText.innerText = currentText.slice(0, char_index - 1)
		char_index--

		if (char_index === 1) {
			isDeleting = false
			index = (index + 1) % titleVariations.length
		}
	}

	// adjust typing speed
	let speed = isDeleting ? 60 : 100
	setTimeout(typewriterEffect, speed)
}

typewriterEffect()
