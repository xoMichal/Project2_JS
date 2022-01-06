const qs = (selector) => document.querySelector(selector);

fetch("https://api.nbp.pl/api/exchangerates/tables/a/last/1/?format=json")
  .then((data) => data.json())
  .then((data) => {
    data[0].rates
      .filter(({ code }) => ["EUR", "USD", "CHF"].includes(code))
      .forEach(({ code, mid }) => {
        const option = qs(`.${code.toLowerCase()}`);
        const text = `${code} ${mid}`;
        option.innerHTML = text;
      });
  });

  const amountDOM = qs(".value");
amountDOM.addEventListener("change", (e) => {
  let choosenAmount = amountDOM.value;

  const resultInPLNCurrency = qs(".result");
  const choiceOfCurrencies = qs(".choose");

  choiceOfCurrencies.addEventListener("click", (e) => {
    const stringToSeparateNumber = choiceOfCurrencies.value.split(" ");
    const RateOfTheSelectedCurrency = parseFloat(stringToSeparateNumber[1]);

    const buttonClic = qs(".count");

  buttonClic.addEventListener("click", (e) => {
      choosenAmount === amountDOM.value
        ? console.log(1)
        : (choosenAmount = amountDOM.value);

      const resultInOtherCurrency = RateOfTheSelectedCurrency * choosenAmount;
      
      resultInPLNCurrency.innerHTML = `to ${resultInOtherCurrency.toFixed(2)} PLN`;
    });
  });
});
