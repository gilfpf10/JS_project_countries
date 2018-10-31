const PubSub = require('../helpers/pub_sub.js');
const CountryView = require('./country_view.js');

const ReadingList = function (container){
  this.container = container;

};

// save button
ReadingList.prototype.bindEvents = function () {
  const form = document.querySelector('#reading-list');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputtedText = event.

  }
};


ReadingList.prototype.handleSubmit = function (evt){
  evt.preventDefault();
  const newCountry = this.createCountry(evt.target);
  PubSub.publish('ReadingList:country-submited',newCountry);
  evt.target.reset();

};

ReadingList.prototype.createCountry = function (container) {
  const newCountry = {
    Country: container.country.value
  };

  return newCountry;
};

module.exports = ReadingList;
