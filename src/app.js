const Countries = require('./models/countries.js');
const SelectView = require('./views/select_view.js');
const CountryView = require('./views/country_view.js');
const MapWrapper = require('./views/mapWrapper.js');

document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('select#countries');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  const countryContainer = document.querySelector('#country');
  const countryView = new CountryView(countryContainer);
  countryView.bindEvents();

  const countries = new Countries('https://restcountries.eu/rest/v2/all');
  countries.bindEvents();
  countries.getData();

  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  // const deletteAllButton = document.querySelector('#delete-all');
  // deleteAllButton.addEventListener('click', handleDeleteAllClick);
});

const handleNewItemFormSubmit = function (event){
  event.preventDefault();

  // console.log('works');

  const readingListItem = createReadingListItem(event.target);
  const readingList = document.querySelector('#reading-list');
  readingList.appendChild(readingListItem);

  event.target.reset();

}

const createReadingListItem = function (form){
  const readingListItem = document.createElement('li');
  readingListItem.classList.add('reading-list-item');



const country = document.createElement('h3');
country.textcontent = country.name;
readingListItem.appendChild(country);

return readingListItem;

}
