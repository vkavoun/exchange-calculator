import angular from 'angular';
import uiRouter from 'angular-ui-router';
import converterComponent from './converter.component';
import exchangeService from "../../services/exchange/exchange";

let currencyConverterModule = angular.module('currencyConverter', [
  uiRouter,exchangeService
])
  .component('currencyConverter', converterComponent)
  .name;

export default currencyConverterModule;
