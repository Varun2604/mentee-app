var https = require('https');
var fs = require('fs');
const querystring = require('querystring');


module.exports = {
    AnalyseAnswer : (message, cb, cbkparams)=>{
        let query = {
            'v' : '20210529',
            'q' : message,
        }
        var options = {
            'method': 'GET',
            'hostname': 'api.wit.ai',
            'path' : '/message?'+querystring.stringify(query),
            'headers': {
              'Authorization': 'Bearer ZYO7NA2F2JG2QAEJ6IGJPZ4KVUWWOBZ3'
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
            cb(body.toString(), cbkparams);
        });
        
        res.on("error", function (error) {
            console.error(error);
        });
        });
          
          req.end();
    }
}
