const button = document.querySelector("button");
const input = document.querySelector("input");
const list = document.querySelector("ul");

button.addEventListener("clicl", function()
{const inputVal =input.value.trim();
if (input == ""){
    return;
}
const list = document.createElement("li");
const deleteB = document.createElement("button");
    liElement.textContent = inputValue;
	deleteB.textContent = "❌";

	deleteB.addEventListener("click", function () {
		listElement.removeChild(liElement);
	});

	liElement.appendChild(deleteB);
	list.appendChild(liElement);

	inputElement.focus();
	inputElement.value = "";
})