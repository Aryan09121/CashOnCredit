function SendMail() {
	let params = {
		name: document.getElementById("name").value,
		email_id: document.getElementById("email_id").value,
		subject: document.getElementById("subject").value,
		message: document.getElementById("message").value,
	};

	console.log(params);

	emailjs
		.send("service_mcdudjf", "template_wyi6guz", params)
		.then(function (res) {
			console.log("success", res.status);
			alert("Your message has been sent successfully");
			document.getElementById("contactForm").reset();
		})
		.catch(function (error) {
			console.error("Failed to send email. Error: ", error);
			alert("Failed to send email. Please try again later.");
		});
}
var isOpen = false;
// Show the WhatsApp popup when the icon is clicked
document.getElementById("whatsapp-popup-icon").addEventListener("click", function () {
	if (!isOpen) {
		document.getElementById("whatsapp-popup").style.display = "block";
		isOpen = true;
	} else {
		document.getElementById("whatsapp-popup").style.display = "none";
		isOpen = false;
	}
});

// Close the WhatsApp popup
function closePopup() {
	document.getElementById("whatsapp-popup").style.display = "none";
}

// Function to send WhatsApp message
function sendMessage() {
	// Retrieve form data
	let name = document.getElementById("name").value;
	let phone = document.getElementById("phone").value;
	let message = document.getElementById("message").value;
	let messageType = document.querySelector('input[name="messageType"]:checked').value;

	// Perform validation if needed

	// Prepare message content based on the selected type
	let content = "";
	if (messageType === "credit") {
		content = "Credit To Cash";
	} else if (messageType === "cash") {
		content = "Cash To Credit ";
	} else if (messageType === "third") {
		content = "Third Service ";
	}

	content = "I am Interested in the following Service:\n  " + content;

	// Example: You can use a service like Twilio to send the message
	// Replace the following with your actual API call to send the message
	console.log("Sending message:", name, phone, content);

	const url =
		"https://wa.me/+917084771718/?text=" + "Name: " + name + "%0D" + "Phone: " + phone + "%0D" + "\nMessage: " + message + "%0D" + "\n" + content;
	window.open(url, "_blank");
	const form = document.querySelector("#whatsapp-form");
	form.reset();
	// Close the popup after submission
	closePopup();
}
