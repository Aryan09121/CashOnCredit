document.addEventListener("DOMContentLoaded", function () {
	const accordionCheckboxes = document.querySelectorAll(".accordion_checkbox");

	accordionCheckboxes.forEach(function (checkbox) {
		checkbox.addEventListener("click", function () {
			const accordionShow = this.nextElementSibling;
			accordionShow.classList.toggle("show");
		});
	});
});
