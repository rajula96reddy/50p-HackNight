var express = require('express');
var getCoins = require('../public/javascripts/getCoins');
var intiateWithdrawl = require('../public/javascripts/intiateWithdrawl')
var router = express.Router();
router.post('/', function(req, res, next) {
    var action = req.body.result.action;
    console.log(action);
    if(action == "intiate"){
        intiateWithdrawl(function(err, response) {
            if (err) {
                console.log('here I am in error')
                res.status(500).json(err)
            } else{
                console.log('I am here in convo'+response);
                res.contentType('application/json');
                res.status(200).json(response)
            }
        })
    }
    else if(action == "yahooWeatherForecast"){
        var param = req.body.result.parameters.number;
        console.log(param);
    }
    else if(action == "Rate"){
        console.log("entered rate")
        getCoins(function(err, response) {
                if (err) {
                    console.log('here I am in error')
                    res.status(500).json(err)
                } else{
                    console.log('I am here in convo'+response);
                    res.contentType('application/json');
               res.status(200).json(response)
                }
            })
    }
});
module.exports = router;