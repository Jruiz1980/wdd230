const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("button");
const listElement = document.querySelector("ul");
buttonElement.addEventListener("click", function () {
	const inputValue = inputElement.value.trim();
	if (inputValue === "") {
		return;
	}

	const liElement = document.createElement("li");
	const deleteButton = document.createElement("button");

	liElement.textContent = inputValue;
	deleteButton.textContent = "❌";

	deleteButton.addEventListener("click", function () {
		listElement.removeChild(liElement);
	});

	liElement.appendChild(deleteButton);
	listElement.appendChild(liElement);

	inputElement.focus();
	inputElement.value = "";
});