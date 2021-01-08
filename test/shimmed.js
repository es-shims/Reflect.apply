'use strict';

require('../auto');

require('../'); // to ensure no side effects

var test = require('tape');
var keys = require('reflect.ownkeys');
var defineProperties = require('define-properties');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(Reflect.apply.length, 3, 'Reflect.apply has a length of 3');

	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(Reflect.apply.name, 'apply', 'Reflect.apply has name "apply"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(Reflect, 'apply'), 'Reflect.apply is not enumerable');
		et.end();
	});

	t.match(keys(Reflect.apply).sort().join('|'), /^(arguments\|caller\|)?length|name(\|prototype)?$/, 'has no unexpected own keys');

	runTests(Reflect.apply, t);

	t.end();
});
