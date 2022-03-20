
let URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
let URL1 = 'https://restcountries.com/v3.1/all';
let curs = await fetch(URL);
    curs = await curs.json();
let countries = await fetch(URL1);
    countries = await countries.json();
// Вытянули данные из API
let tag = document.getElementById('output');
countries = countries.map(item => ({
    country : item.name.official,
    currency : item.currencies,
    flag : item.flags.png
 }))
// В массиве с объектами всех стран оставили только нужные данные страна,валюта и флаг
 for (let i =0; i < countries.length; i++ ) {
    if (countries[i].currency === undefined) {
        countries[i].currency = {NON : 'no currency'};
    }
    countries[i].currency = Object.keys(countries[i].currency).join('');
}
// В массиве стран, для тех стран, у кот.нет валюты, добавили 'NON: no currency' иначе при обращении к свойству currency вылазит undefined
//  Затем в св-во currency занесли название(код) валюты как ее значение т.к до этого код валюты был как имя свойства а не его начение
//  как необходимо.
tag.innerHTML = curs.map(item => `
    <div class="d-flex gap-3 w-100 justify-content-start align-items-center border">
         <h5 style="min-width: 10%">${item.txt}</h5>
         <h4 style="min-width: 10%">${item.cc}</h4>
         <h4 style="min-width: 10%">${item.rate}</h4>
         <div class="d-flex flex-wrap gap-2 justify-content-center align-items-center">
            ${countries.filter(pos => pos.currency.includes(item.cc)).map(counter => `
            <img src="${counter.flag}" alt="" style="max-width: 5rem" class="p-1 border border-primary">`).join('')}
         </div>
    </div>
    `).join('');
// Вставили разметку в 2-х мапингах на разном уровне именно там где появляется доступ к тем данным кот нужны для разметки.


