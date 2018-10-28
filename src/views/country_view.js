const PubSub = require('../helpers/pub_sub.js');

const CountryView = function (selectElement){
  this.element  = selectElement;

};

CountryView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:selected-coutry-ready', (event) => {
    this.clearCountry();
    this.render(event.detail);


  });

};

module.exports = CountryView;
