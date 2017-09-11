 var http = require('http');

function getHTML (options, callback) {

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

  });

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


getHTML(requestOptions, printHTML)