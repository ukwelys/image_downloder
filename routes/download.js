var express = require('express');
var router = express.Router();
const downd = require('image-downloader');
var connection = require('./db');
const axios = require('axios');

/* GET home page. */
router.get('/', function (req, res, next) {
    var url = req.param('url');
    var uuid = req.param('uid')
    var resource = req.param('resource');
    const options = {
        url: url,
        dest:'../ukwleys_frontend/src/assets/images/profiles'
    }
    downd.image(options)
        .then(({filename, image})=>{
            console.log(filename)
            axios.post('http://localhost:1337/images', {
                Resource: resource,
                url: url,
                uri: filename,
                uid: uuid
            })
                    .then(({data}) =>{
                        if (data.response == 'Created'){
                            res.redirect('/new');
                        }
                    })
                    .catch(function(error){
                        console.log(error)
                        res.send({error: error})
                    })
            return false;
        })
    
    return false;
});

module.exports = router;
