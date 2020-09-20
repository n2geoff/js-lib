const test = require('tape');
const index = require('../dist/bundle.umd.js');

test('Index', function(t) {

    t.test('setup', function(t) {
        t.ok(true);
        t.end();
    });
});