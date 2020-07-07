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
      var newcommand = req.body.computer + "\n" + req.body.command + "\n" + datetime + "\n"

      axios.post("https://content.dropboxapi.com/2/files/download", null, {
          headers: headers
        })
        .then((response) => {
            const headersforupload = {
              'Authorization': 'Bearer ' + req.body.token,
              'Dropbox-API-Arg' : "{\"path\": \"Command.txt\",\"mode\": \"overwrite\",\"autorename\": true,\"mute\": false,\"strict_conflict\": false}",
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
            console.log(error.response.data.error_summary)
            var errorpath = error.response.data.error_summary.split(".")
            console.log(errorpath[0])
            if(errorpath[0] == "path/not_found/"){
              const headersforupload = {
                'Authorization': 'Bearer ' + req.body.token,
                'Dropbox-API-Arg' : "{\"path\": \"/Command.txt\",\"mode\": \"add\",\"autorename\": true,\"mute\": false,\"strict_conflict\": false}",
                "Content-Type" : "application/octet-stream"
              }
              axios.post("https://content.dropboxapi.com/2/files/upload", newcommand, {
                headers: headersforupload
              })
              .then((response) => {
                res.json(response.data)
              })
              .catch((error) => {
                console.log(error.response.data)
                res.sendStatus(500)
              })
            }else{
              res.sendStatus(500)
            }
        })
});


module.exports = router
