// document.addEventListener("DOMContentLoaded", function () {
// 	const accordionCheckboxes = document.querySelectorAll(".accordion_checkbox");

// 	accordionCheckboxes.forEach(function (checkbox) {
// 		checkbox.addEventListener("click", function () {
// 			const accordionShow = this.nextElementSibling;
// 			accordionShow.classList.toggle("show");
// 		});
// 	});
// });

document.addEventListener("DOMContentLoaded", function () {
	const accordionCheckboxes = document.querySelectorAll(".accordion_checkbox");

	accordionCheckboxes.forEach(function (checkbox) {
		checkbox.addEventListener("click", function () {
			const accordionShow = this.nextElementSibling;
			accordionShow.classList.toggle("show");

			// Rotate arrow icon
			const arrowIcon = this.querySelector("i");
			arrowIcon.classList.toggle("rotate");
		});
	});
});
