'use strict';

var CreateMethodProperty = require('es-abstract/2022/CreateMethodProperty');
var DefinePropertyOrThrow = require('es-abstract/2022/DefinePropertyOrThrow');
var globalThis = require('globalthis')();

var getPolyfill = require('./polyfill');

module.exports = function shimReflectApply() {
	if (typeof Reflect === 'undefined') {
		var R = {};
		if (typeof Symbol === 'function' && Symbol.toStringTag) {
			DefinePropertyOrThrow(R, Symbol.toStringTag, {
				'[[Configurable]]': true,
				'[[Enumerable]]': false,
				'[[Value]]': 'Reflect',
				'[[Writable]]': false
			});
		}
		CreateMethodProperty(globalThis, 'Reflect', R);
	}

	var polyfill = getPolyfill();
	if (polyfill !== Reflect.apply) {
		CreateMethodProperty(Reflect, 'apply', polyfill);
	}
	return polyfill;
};
