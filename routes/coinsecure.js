/**
 * Created by Dell on 14-01-2017.
 */
var express = require('express');
var getCoins = require('../public/javascripts/getCoins');

var router = express.Router();
router.post('/', function(req, res, next) {
    console.log("Hey in Conversation");
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
});

module.exports = router;

