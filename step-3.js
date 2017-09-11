function getAndPrintHTML (options) {

  var http = require('http');

  http.get(options, function (response) {
    response.setEncoding('utf8');
    var eachChunk = "";
    response.on('data', function (data) {
      for (i = 0; i < data.length; i++) {
        eachChunk += data[i];
      }
      console.log(eachChunk);
    });
  });
}


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions)
