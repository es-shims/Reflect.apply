'use strict';

var CreateMethodProperty = require('es-abstract/2023/CreateMethodProperty');
var globalThis = require('globalthis')();
var setToStringTag = require('es-set-tostringtag');

var getPolyfill = require('./polyfill');

module.exports = function shimReflectApply() {
	if (typeof Reflect === 'undefined') {
		var R = {};
		setToStringTag(R, 'Reflect');
		CreateMethodProperty(globalThis, 'Reflect', R);
	}

	var polyfill = getPolyfill();
	if (polyfill !== Reflect.apply) {
		CreateMethodProperty(Reflect, 'apply', polyfill);
	}
	return polyfill;
};
