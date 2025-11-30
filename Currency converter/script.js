import currency from "./currency.js";
let from_currency = document.getElementById('fromCurrency');
let to_currency = document.getElementById('toCurrency');
let convert_btn = document.getElementById('convertBtn');


for (let i = 0; i < currency.length; i++) {

    let option1 = document.createElement('option');
    option1.value = currency[i].code;
    option1.innerText = `${currency[i].name} (${currency[i].code})`;
    from_currency.appendChild(option1);

    let option2 = document.createElement('option');
    option2.value = currency[i].code;
    option2.innerText = `${currency[i].name} (${currency[i].code})`;
    to_currency.appendChild(option2);
}

convert_btn.addEventListener('click', () => {
    
    let amount = document.getElementById('amount').value;
    let fromCurr = from_currency.value;
    let toCurr = to_currency.value;
    let resultDiv = document.getElementById('result');  
    if (amount === "" || isNaN(amount)) {
        resultDiv.innerText = "Please enter a valid amount.";
        return;
    }
    if (fromCurr === toCurr) {
        resultDiv.innerText = "Please select different currencies.";
        return;
    }
    let api_url = `https://api.exchangerate-api.com/v4/latest/${fromCurr}`;

    fetch(api_url)
    .then(response => response.json())
    .then(data => {
        let rate = data.rates[toCurr];
        let converted_amount = (amount * rate).toFixed(2);
        resultDiv.innerText = `${amount} ${fromCurr} = ${converted_amount} ${toCurr}`;
    })
    .catch(error => {
        resultDiv.innerText = "Error fetching exchange rate.";
        console.error("Error:", error);
    });

});
