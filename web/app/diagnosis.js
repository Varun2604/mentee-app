
var https = require('https');
var fs = require('fs');


module.exports = {
    Diagnose : (analysis, cb) => {
        var options = {
            'method': 'POST',
            'hostname': 'mahadevanpg.pythonanywhere.com',
            'path': '/api/v1/diagnose',
            'headers': {
              'Content-Type': 'application/json'
            },
            'maxRedirects': 20,
            rejectUnauthorized: false
          };
          
          var req = https.request(options, function (res) {
            var chunks = [];
          
            res.on("data", function (chunk) {
                chunks.push(chunk);
            });
          
            res.on("end", function (chunk) {
                var body = Buffer.concat(chunks);
                cb(body.toString());
            });
          
            res.on("error", function (error) {
                console.error(error);
            });
          });
          
          var postData = JSON.stringify({
            "person_data": analysis
          });
          
          req.write(postData);
          
          req.end();
    }
}