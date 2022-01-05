const qs = (selector) => document.querySelector(selector);

const USD = qs(".option1");
const EUR = qs(".option2");
const CHR = qs(".option3");

fetch("https://api.nbp.pl/api/exchangerates/tables/a/last/1/?format=json")
  .then((data) => data.json())
  .then((data) => {
    const valueUSD = data[0].rates[1].mid;
    const valueEUR = data[0].rates[7].mid;
    const valueCHR = data[0].rates[9].mid;
    const nameUSD = data[0].rates[1].code;
    const nameEUR = data[0].rates[7].code;
    const nameCHR = data[0].rates[9].code;
    USD.innerHTML = `${nameUSD} wynosi dzisiaj ${valueUSD}`;
    EUR.innerHTML = `${nameEUR} wynosi dzisiaj ${valueEUR}`; // funkcja która zwraca info pobierane z api poprzez feth
    CHR.innerHTML = `${nameCHR} wynosi dzisiaj ${valueCHR}`;
  });
const inputValue = qs(".value");

inputValue.addEventListener("change", (e) => {
  const howMuchMoney = inputValue.value;
  console.log(howMuchMoney);
  const resultPLN = qs(".result");
  const selectValue = qs(".choose");

  selectValue.addEventListener("change", (e) => {
    const helpful = selectValue.value.split(" ");
    const chooseToCount = parseFloat(helpful[3]);
    console.log(chooseToCount);

    const buttonClic = qs(".count");
    // co ma sie stac po kliknieciu przelicz
    buttonClic.addEventListener("click", (e) => {
      const diffToPLN = chooseToCount * howMuchMoney;
      resultPLN.innerHTML = `to ${diffToPLN.toFixed(2)} PLN`;
      console.log(diffToPLN);
    });
  });
});

// pomysł 1 wrzucić feth który jest do danej waluty
