var yahooFinance = require('yahoo-finance');
var fs = require('fs');

// get open, regularMarketChange, regularMarketTime, regularMarketChangePercent
let promise = new Promise((resolve, reject) => {
    yahooFinance.quote({
        symbol: 'Q0F.SI'
    }).then(function (quote) {
        resolve(JSON.stringify(quote, null, 2));
    }).catch(error => {
        reject(error);
    });
});

promise
.then(response => {
    console.log(response);
    fs.writeFile('./result.json', response, (err) => {
        if (!err) {
            console.log('done');
        }
    });        
});

