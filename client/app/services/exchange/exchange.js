import angular from 'angular';
import ExchangeService from './exchange.service';

let exchangeModule = angular.module('ExchangeService', [])
.service('ExchangeService', ExchangeService)
.name;

export default exchangeModule;
