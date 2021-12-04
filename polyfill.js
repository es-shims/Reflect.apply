'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	return (typeof Reflect === 'object' && Reflect.apply) || implementation;
};
