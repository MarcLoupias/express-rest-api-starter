const http = require('http');
var app = require('./../../app');
var server;

/* working solution : https://gist.github.com/BoyCook/5274570
 * mocha root hooks : https://mochajs.org/#root-level-hooks
 * */

before(function (done) {
    server = http.createServer(app);
    server.listen(3000, done);
    console.log('Integration test server started on http://localhost:3000/');
});

after(function (done) {
    server.close();
    if (done) {
        console.log('Integration test server closed');
        done();
    }
});
