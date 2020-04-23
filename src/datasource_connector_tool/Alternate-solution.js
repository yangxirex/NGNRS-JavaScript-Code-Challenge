// Problem 2
// Task: Implement a datasource connector to abstract away data retrieval and manipulation from the `ViewControllers`.  
// Your solution shall use only [Vanilla JavaScript](http://vanilla-js.com).  

class Datasource{
    list = new Array();;
      constructor(){
       let list = fetch('https://static.ngnrs.io/test/prices')
          .then(res => res.json())
          .then((out) => {
              list = out.data;
      }).catch(err => console.error(err))
  }

  getPrices() {
      return this.list;
  }
}

class Price {
  constructor(buy,sell,id,pair,timestamp) {
      this.buy = buy;
      this.sell = sell;
      this.id = id;
      this.pair = pair;
      this.timestamp = timestamp;
  }

  mid() {
      return (this.buy + this.sell)/2.0; 
  }

  quote() {
    return this.pair.slice(this.pair.length - 3);
}
}


let ds = new Datasource();
ds.getPrices()
    .then(prices => {
        prices.forEach(price => {
            console.log(`Mid price for ${ price.pair } is ${ price.mid() }.`);
        });
    }).catch(error => {
        console.err(error);
    });




