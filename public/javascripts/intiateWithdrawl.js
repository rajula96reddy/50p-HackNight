var request = require('request');

var intiateWithdrawl = function( callback) {
    var s ={};
    request({
        url: 'https://api.coinsecure.in/v1/user/wallet/coin/withdraw/initiate',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'FKEMazF1WonDijiNMqTrxgGGlDSSi0qjnteV0Rzw'
        },
        method: 'POST',
        json: {
            "walletID": "iZcKsBVoHgqKa6XrGvCU",
            "amt": 0,
            "toAddr": "14dZz4jpcNMLfZCwKX9VzJwnCeKYJhboF6",
            "msg": "This actually works",
            "pin": "0",
            "fees": {}
        }
    }, function (error, response, body) {
        if (error) {
            console.log(error);
        } else {
            console.log(response.body.success, body);
            if(response.body.success){
                 s = {"speech":"Hurray! You are responsible for few smiles",
                    "displayText": "Hurray! You are responsible for few smiles",
                    "source": "apiai-weather-webhook-sample"}
            }
            else{
                s = {"speech":"Uff! There is some problem with your transaction. Please try again.",
                    "displayText": "Uff! There is some problem with your transaction. Please try again.",
                    "source": "apiai-weather-webhook-sample"}
            }
        }
        callback(null, s)
    });
}
module.exports = intiateWithdrawl