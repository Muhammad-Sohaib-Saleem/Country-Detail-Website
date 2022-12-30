const searchBtn = document.getElementById("searchBtn");
const countryInput = document.getElementById("countryInput");

searchBtn.addEventListener("click", () => {
  let countryName = countryInput.value;
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  fetch(finalURL)
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data[0]);
      searchResult.innerHTML = `
      <img src="${data[0].flags.svg}" alt="" class="flag-img" />
      <h2>${data[0].name.common}</h2>
      <div class="wrapper">
      <div class="data-wrapper">
        <h4>Capital:</h4>
        <span>${data[0].capital[0]}</span>
      </div>
      </div>
      <div class="wrapper">
      <div class="data-wrapper">
        <h4>Continent:</h4>
        <span>${data[0].continents}</span>
      </div>
      </div>
      <div class="wrapper">
      <div class="data-wrapper">
        <h4>currencies:</h4>
        <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${
        Object.keys(data[0].currencies)[0]
      } - ${data[0].currencies[Object.keys(data[0].currencies)].symbol}</span>
      </div>
      </div>
      <div class="wrapper">
      <div class="data-wrapper">
        <h4>Population:</h4>
        <span>${Object.values(data[0].languages)
          .toString()
          .split(",")
          .join(", ")}</span>
      </div>
      </div>
      `;
    })
    .catch(() => {
      if (countryName == 0) {
        searchResult.innerHTML = `<h3>Search field is empty</h3>`;
      } else {
        searchResult.innerHTML = `<h3>Please enter valid a country name</h3>`;
      }
    });
});
