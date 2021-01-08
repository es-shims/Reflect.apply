'use strict';

var define = require('define-properties');
var globalThis = require('globalthis')();

var getPolyfill = require('./polyfill');

module.exports = function shimReflectApply() {
	if (typeof Reflect === 'undefined') {
		globalThis.Reflect = {};
	}

	var polyfill = getPolyfill();
	define(Reflect, { apply: polyfill });
	return polyfill;
};
