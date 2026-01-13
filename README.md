# Reflect.apply <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ESnext spec-compliant `Reflect.apply` shim/polyfill/replacement that works as far down as ES3.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://tc39.es/ecma262/#sec-map-objects).

## Getting started

```sh
npm install --save reflect.apply
```

## Usage/Examples

```js
console.log(Reflect.apply(Reflect.floor, undefined, [1.75])); // 1
console.log(Reflect.apply(''.charAt, 'ponies', [3])); // 'i'
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/reflect.apply
[npm-version-svg]: https://versionbadg.es/es-shims/Reflect.apply.svg
[deps-svg]: https://david-dm.org/es-shims/Reflect.apply.svg
[deps-url]: https://david-dm.org/es-shims/Reflect.apply
[dev-deps-svg]: https://david-dm.org/es-shims/Reflect.apply/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/Reflect.apply#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/reflect.apply.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/reflect.apply.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/reflect.apply.svg
[downloads-url]: https://npm-stat.com/charts.html?package=reflect.apply
[codecov-image]: https://codecov.io/gh/es-shims/Reflect.apply/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/es-shims/Reflect.apply/
[actions-image]: https://img.shields.io/github/check-runs/es-shims/Reflect.apply/main
[actions-url]: https://github.com/es-shims/Reflect.apply/actions
