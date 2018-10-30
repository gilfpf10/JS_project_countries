const PubSub = require('../helpers/pub_sub.js');
const CountryView = require('./country_view.js');
// container
const ReadingList = function (container){
  this.container = container;

};


// reading list publish
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

ReadingList.prototype.createButton = function (save){
  
}
module.exports = ReadingList;
