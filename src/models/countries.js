const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Countries = function (url){
  this.url = url;
  this.countries = []

};

Countries.prototype.bindEvents = function (){
  PubSub.subscribe('SelectView:change', (event) =>{
  selectedIndex = event.detail;
  const selectedCountry = this.countries[selectedIndex];
  Pubsub.publish('Countries:selected-country-ready', selectedCountry);

});

};

Countries.prototype.getData = function (){
  const request = new Request(this.url);
  request.get(data => this.handleData(data));


};

Countries.prototype.handleData = function (data){
  this.countries = data;
  PubSub.publish('Countries:countries-data-ready', this.countries);
};

module.exports = Countries;
