var http = require('http');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  http.get(requestOptions, function (response) {

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

console.log(getAndPrintHTML());