const PubSub = require('../helpers/pub_sub.js');


const SelectView = function (selectElement){
  this.element = selectElement;


};

SelectView.prototype.bindEvents = function (){
  PubSub.subscribe('Countries:countries-data-ready', (event) => {
    this.populate(event.detail)

  });

  this.element.addEventListener('change', (event) => {
    const selectIndex =event.target.value;
    PubSub.publish('SelectView:change', selectedIndex);
  })
};

SelectView.prototype.populate = function (countries) {
  countries.forEach((country, index) => {
    const countryOption = this.createOption(country.name, index);
    this.element.appendChild(countryOption);
  });
};

SelectView.prototype.createOption = function (name, index){
  const option = document.createElement('option');
  option.textContent = name;
  option.value = index;
  return option;

};

module.exports = SelectView;
