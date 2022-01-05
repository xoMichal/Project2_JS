const qs = (selector) => document.querySelector(selector);

// wyciaganie eur
fetch("https://api.nbp.pl/api/exchangerates/rates/a/eur/?format=json")
.then((data) => data.json())
.then((data) => {const EUR = data.rates,
                 const eurValue = EUR[0].mid;
                })
.then((data) => {const nameEUR = data.code})
.catch(err);

// wyciaganie chf
fetch("https://api.nbp.pl/api/exchangerates/rates/a/chf/?format=json")
.then((data) => data.json())
.then((data) => {const CHF = data.rates,
    const chfValue = CHF[0].mid;
   })
.then((data) => {const nameCHF = data.code})
.catch(err);

   //wyciaganie usd
   fetch("https://api.nbp.pl/api/exchangerates/rates/a/usd/?format=json")
.then((data) => data.json())
.then((data) => {const USD = data.rates,
    const usdValue = USD[0].mid;
   })
.then((data) => {const nameUSD = data.code})
.catch(err);

const downPart = qs(".bottom");

downPart.addEventListner("click", (e){
    
})

