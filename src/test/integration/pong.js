const assert = require('assert');
var request = require('superagent');

describe('IT /pong', function() {
    it('should reach /pong then extract the json', function(done) {
        request
            .get('127.0.0.1:3000/pong')
            .end(function(err, res){
                assert.ifError(err);
                assert.deepEqual({value: 'pong'}, res.body);
                done();
            });
    });
});
