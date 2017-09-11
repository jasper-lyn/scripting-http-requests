module.exports = function getHTML (options, callback) {

  var http = require('http');

  http.get(options, function (response) {

    response.setEncoding('utf8');

    var html = "";
    response.on('data', function (data) {
      for (i = 0; i < data.length; i++) {
        html += data[i];
      }
    })

    response.on('end', function() {
    callback(html);
    });

})

};