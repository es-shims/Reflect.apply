'use strict';

var Call = require('es-abstract/2022/Call');

module.exports = function apply(target, thisArgument, argumentsList) {
	return Call(target, thisArgument, argumentsList);
};
