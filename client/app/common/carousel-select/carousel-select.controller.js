class CarouselSelectController {
  constructor() {
    this.name = 'carousel-select';
  }

  updateLabel() {
    this.label = this.itemLabels[this.currency];

    this.onUpdate({
      type:this.type,
      currency: this.currency
    });
  }

  $onInit() {
    this.itemLabels = JSON.parse(this.items);
    this.label = this.itemLabels[this.currency];
  }

  previousClicked() {
    if(this.currency > 0) {
      this.currency--;
    } else {
      this.currency = this.itemLabels.length -1;
    }

    this.updateLabel();
  }

  nextClicked() {
    this.currency = (this.currency + 1) % this.itemLabels.length;

    this.updateLabel();
  }
}

export default CarouselSelectController;


