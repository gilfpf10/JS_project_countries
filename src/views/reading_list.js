const PubSub = require('../helpers/pub_sub.js');
const CountryView = require('./country_view.js');


const ReadingList = function (form){
  this.form = form;

};

ReadingList.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

ReadingList.prototype.handleSubmit = function (evt){
  evt.preventDefault();
  const newCountry = this.createCountry(evt.target);
  PubSub.publish('ReadingList:country-submited',newCountry);
  evt.target.reset();

};

ReadingList.prototype.createCountry = function (form) {
  const newCountry = {
    Country: form.country.value
  };

  return newCountry;
};
module.exports = ReadingList;
