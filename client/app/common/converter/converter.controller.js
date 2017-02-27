import AppConstants from "../../util/appConstants";

const fx = require("money");
const _ = require("underscore");

class CurrencyConverterController {
  constructor(exchangeService) {
    this.name = 'currency-converter';

    this.currencyLabels = ["CAD", "USD","EUR"];
    this.fromCurrency = 0;
    this.toCurrency = 1;

    this.fromValue = null;
    this.toValue = null;

    this.infoLabel = AppConstants.LABELS[0];
    this.infoShowing = false;

    this.exchangeService = exchangeService;
  }

  $onInit() {
    this.getRates();
  }

  updateExchangeCurrency(type, currency) {
    if(type === "from") {
      this.fromCurrency = currency;
      this.getRates(true);
    } else {
      this.toCurrency = currency;
      this.updateValues(this.fromCurrency, this.toCurrency);
    }
  }

  getCurrencyLabel(labelIndex) {
    return this.currencyLabels[labelIndex];
  }

  updateValues(from, to, direction = 0) {
    fx.base = this.exchangeData.base;
    fx.rates = this.exchangeData.rates;

    fx.settings = {
      from: this.getCurrencyLabel(from),
      to: this.getCurrencyLabel(to)
    };

    if(direction == 0) {
      this.toValue = fx.convert(this.fromValue);
    } else {
      this.fromValue = fx.convert(this.toValue);
    }

  }

  updateInfo() {
    this.infoRates = [];

    _.keys(this.exchangeData.rates).forEach(function(key) {
      this.infoRates.push(
        {
          currency:key,
          value: this.exchangeData.rates[key]
        }
      );
    }, this);
  }

  getRates(reload = false) {
    this.exchangeService.getRates(this.getCurrencyLabel(this.fromCurrency))
      .subscribe(
        data => {
          this.exchangeData = data.data;
          if(reload) {
            this.updateValues(this.fromCurrency, this.toCurrency);
          }

          this.updateInfo();
        },
        err => {
          console.log(err);
        }
      );
  }

  fromChanged() {
    this.updateValues(this.fromCurrency, this.toCurrency);
  }

  toChanged() {
    this.updateValues(this.toCurrency, this.fromCurrency, 1);
  }

  toggleDisclaimer() {
    this.infoShowing = !this.infoShowing;
    this.infoLabel = this.infoLabel ? AppConstants.LABELS[1] : AppConstants.LABELS[0];
  }
}

CurrencyConverterController.$inject = ["ExchangeService"];

export default CurrencyConverterController;
