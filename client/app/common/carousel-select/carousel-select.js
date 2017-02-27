import angular from 'angular';
import uiRouter from 'angular-ui-router';
import carouselComponent from './carousel-select.component';

let carouselSelectModule = angular.module('carouselSelect', [
  uiRouter
])
  .component('carouselSelect', carouselComponent)
  .name;

export default carouselSelectModule;
