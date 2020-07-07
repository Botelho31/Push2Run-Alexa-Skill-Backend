const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/command',(req,res) => {
    const headers = {
        'Authorization': 'Bearer ' + req.body.token,
        'Dropbox-API-Arg' : "{\"path\": \"/Command.txt\"}",
        "Content-Type" : "text/plain"
      }
      var datetime = new Date();
      console.log(datetime);
      var newcommand = req.body.computer + "\n" + req.body.command + "\n" + datetime + "\n"

      axios.post("https://content.dropboxapi.com/2/files/download", null, {
          headers: headers
        })
        .then((response) => {
	   var mode = "overwrite"
	   if(response.data.error_summary == "path/not_found/.."){
		mode = "ädd"
	   }
            const headersforupload = {
              'Authorization': 'Bearer ' + req.body.token,
              'Dropbox-API-Arg' : "{\"path\": \"/Command.txt\",\"mode\": \"" + mode + "\",\"autorename\": true,\"mute\": false,\"strict_conflict\": false}",
              "Content-Type" : "application/octet-stream"
            }
            axios.post("https://content.dropboxapi.com/2/files/upload", response.data + newcommand, {
              headers: headersforupload
            })
            .then((response) => {
              res.json(response.data)
            })
            .catch((error) => {
              console.log(error.response.data)
              res.sendStatus(500)
            })
        })
        .catch((error) => {
            console.log(error.response.data)
          res.sendStatus(500)
        })
});


module.exports = router
