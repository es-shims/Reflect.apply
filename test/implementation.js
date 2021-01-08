'use strict';

var test = require('tape');
var functionsHaveNames = require('functions-have-names')();

var implementation = require('../implementation');
var runTests = require('./tests');

test('implementation', function (t) {
	t.equal(implementation.length, 3, 'implementation has a length of 3');

	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(implementation.name, 'apply', 'implementation has name "apply"');
		st.end();
	});

	runTests(implementation, t);

	t.end();
});
