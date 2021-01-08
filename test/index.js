'use strict';

var apply = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	runTests(apply, t);

	t.end();
});
