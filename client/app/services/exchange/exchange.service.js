import AppConstants from "../../util/appConstants";
import rx from "rx-angular";

export default class ExchangeService {
  constructor($http){
    this.name = "exchangeService";

    this.$http = $http;
  }

  getRates(base = "CAD") {
    let targetUrl = AppConstants.EXCHANGE_API.replace("##BASE##", base);

    return rx.Observable
      .fromPromise(function() {
        try {
          return this.$http({
            url: targetUrl,
            method: "jsonp"
          })
        }
        catch(Exception e) {
          return {
            type: 'connection problem',
            msg: 'connection problem'
          }
        }
      });
  }
}

ExchangeService.$inject = ["$http"];
