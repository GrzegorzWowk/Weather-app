const inputText = document.querySelector(".top__input");
const btn = document.querySelector(".top__send-btn");
const cityName = document.querySelector(".top__city-name");
const warning = document.querySelector(".warning");

const addCityName = () => {
	const city = inputText.value || "London";
	cityName.textContent = city
};

const checkLength = () => {
	if (inputText.value.length < 5) {
		warning.textContent = " Masz za krótkie miasto dzbanie";
	} else if (inputText.value.length > 15) {
		warning.textContent = " Ale dojebałeś długą nazwe , weź to skróć";
	} else {
		addCityName();
		warning.textContent = "";
	}
};

const enterCheck = e => {
	if (e.key === "Enter") {
		checkLength();
	}
};

inputText.addEventListener("keyup", enterCheck);
btn.addEventListener("click", checkLength);
