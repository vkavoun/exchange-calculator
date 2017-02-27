import angular from 'angular';
import CarouselSelect from "./carousel-select/carousel-select";
import CurrencyConverter from "./converter/converter";

let commonModule = angular.module('app.common', [
  CarouselSelect,
  CurrencyConverter
])
  .name;

export default commonModule;
