const PubSub = require('../helpers/pub_sub.js');
const ReadingList = ('./reading_list.js');

const CountryView = function (container) {
  this.container = container;
};

CountryView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:selected-country-ready', (evt) => {
    this.clearCountry();
    this.render(evt.detail);
  });
};

CountryView.prototype.render = function (country) {
  const countryName = this.createTextElement('h2', country.name);
  this.container.appendChild(countryName);

  const flagImage = document.createElement('img');
  flagImage.src = country.flag;
  this.container.appendChild(flagImage);

  const regionTitle = this.createTextElement('h3', 'Region:');
  this.container.appendChild(regionTitle);

  const countryRegion = this.createTextElement('p', country.region);
  this.container.appendChild(countryRegion);

  const languagesListTitle = this.createTextElement('h3', 'Languages:');
  this.container.appendChild(languagesListTitle);


  const languagesList = document.createElement('ul');
  this.populateLanguageList(country.languages, languagesList);
  this.container.appendChild(languagesList);

  const callingCodesTitle = this.createTextElement('h3', 'Calling Code:');
  this.container.appendChild(callingCodesTitle);

  const callingCodes = this.createTextElement('p', country.callingCodes);
  this.container.appendChild(callingCodes);

  const populationTitle = this.createTextElement('h3', 'Total Population:');
  this.container.appendChild(populationTitle);

  const population = this.createTextElement('p', country.population);
  this.container.appendChild(population);

  const capitalTitle = this.createTextElement('h3', 'Capital City:');
  this.container.appendChild(capitalTitle);

  const capital = this.createTextElement('p', country.capital);
  this.container.appendChild(capital);

  const currenciesListTitle = this.createTextElement('h3', 'Currencies:');
  this.container.appendChild(currenciesListTitle);

  const currenciesList = document.createElement('ul');
  this.populateCurrenciesList(country.currencies, currenciesList);
  this.container.appendChild(currenciesList);


};

CountryView.prototype.createTextElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};

CountryView.prototype.populateLanguageList = function (languages, list) {
  languages.forEach((language) => {
    const listItem = document.createElement('li');
    listItem.textContent = language.name;
    list.appendChild(listItem);
  });
};

CountryView.prototype.populateCurrenciesList = function (currencies, list) {
  currencies.forEach((currencie) => {
    const listItem = document.createElement('li');
    listItem.textContent = currencie.name;
    list.appendChild(listItem);
  });
};
CountryView.prototype.clearCountry = function () {
  // this.container.innerHTML = '';
};

module.exports = CountryView;
