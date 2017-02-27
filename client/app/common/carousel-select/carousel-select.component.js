import template from './carousel-select.html';
import controller from './carousel-select.controller';
import './carousel-select.scss';

let carouselSelectComponent = {
  restrict: 'E',
  bindings: {
    currency:"@",
    items:"@",
    onUpdate: "&",
    type:"@"
  },
  template,
  controller
};

export default carouselSelectComponent;
