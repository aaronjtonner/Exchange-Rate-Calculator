const currencyOne = document.getElementById('currency-one');
const currencyTwo = document.getElementById('currency-two');
const amountOne = document.getElementById('amount-one');
const amountTwo = document.getElementById('amount-two');
const rate = document.getElementById('rate');
const swapBtn = document.getElementById('swap');

function calculate() {
	fetch(
		`https://v6.exchangerate-api.com/v6/939a086cb45b89175b52badb/latest/${currencyOne.value}`
	)
		.then((res) => res.json())
		.then((data) => {
			let outputRate = +data.conversion_rates[currencyTwo.value];
			rate.innerHTML = `1 ${currencyOne.value} = ${outputRate} ${currencyTwo.value}`;
			rate.innerHTML = `1 ${currencyOne.value} is equivalent to <div class="output-rate">${outputRate} ${currencyTwo.value}</div>`;
			amountTwo.value = outputRate * amountOne.value;
		});
}

function swap() {
	[currencyOne.value, currencyTwo.value] = [
		currencyTwo.value,
		currencyOne.value,
	];
	calculate();
}

swapBtn.addEventListener('click', swap);

currencyOne.addEventListener('change', calculate);
currencyTwo.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);
amountTwo.addEventListener('input', calculate);
calculate();
