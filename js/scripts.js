document.addEventListener("DOMContentLoaded", function () {
	const animatedBox = document.querySelector(".animated-box");
	if (animatedBox) {
		animatedBox.addEventListener("mouseover", function () {
			animatedBox.style.transform = "scale(1.5)";
		});
		animatedBox.addEventListener("mouseout", function () {
			animatedBox.style.transform = "scale(1)";
		});
	}

	const animatedCircle = document.querySelector(".animated-circle");
	if (animatedCircle) {
		document.addEventListener("keydown", function (event) {
			if (event.key === "a") {
				animatedCircle.style.backgroundColor = "#28A745";
			} else if (event.key === "b") {
				animatedCircle.style.backgroundColor = "#DC3545";
			}
		});
	}

	const animatedClickBox = document.querySelector(".animated-scroll-box");
	if (animatedClickBox) {
		animatedClickBox.addEventListener("click", function () {
			animatedClickBox.style.backgroundColor =
				animatedClickBox.style.backgroundColor === "red"
					? "#007BFF"
					: "red";
		});
	}
});
