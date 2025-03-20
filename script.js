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

// IMAGE CAROUSEL PARALLAX EFFECT
const track = document.getElementById("image-track")

window.onmousedown = (e) => {
	track.dataset.mouseDownAt = e.clientX
}

window.onmouseup = () => {
	track.dataset.mouseDownAt = "0" // reset on mouse up
	track.dataset.prevPercentage = nextPercentage
}

window.onmousemove = (e) => {
	if (track.dataset.mouseDownAt === "0") return

	const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
		maxDelta = window.innerWidth / 2

	// track last mouse position
	const percentage = (mouseDelta / maxDelta) * -100
	nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage

	// **clamp the value within -100 to 0**
	nextPercentage = Math.max(Math.min(nextPercentage, 0), -100)

	track.dataset.percentage = nextPercentage

	track.animate(
		{
			transform: `translate(${nextPercentage}%, -50%)`,
		},
		{ duration: 10000, fill: "forwards" }
	)

	for (const image of track.getElementsByClassName("image")) {
		image.animate(
			{
				objectPosition: `${nextPercentage + 100}% 50%`,
			},
			{ duration: 10000, fill: "forwards" }
		)
	}
}