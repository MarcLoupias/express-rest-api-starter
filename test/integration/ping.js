const assert = require('assert');
var request = require('superagent');

describe('IT /ping', function() {
    it('should reach /ping then extract the json', function(done) {
        request
            .get('127.0.0.1:3000/ping')
            .end(function(err, res){
                assert.ifError(err);
                assert.deepEqual({value: 'ping'}, res.body);
                done();
            });
    });
});
