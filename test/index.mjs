import apply, * as applyModule from 'reflect.apply';
import test from 'tape';
import runTests from './tests.js';

test('as a function', (t) => {
	runTests(apply, t);

	t.end();
});

test('named exports', async (t) => {
	t.deepEqual(
		Object.keys(applyModule).sort(),
		['default', 'shim', 'getPolyfill', 'implementation'].sort(),
		'has expected named exports',
	);

	const { shim, getPolyfill, implementation } = applyModule;
	t.equal(await import('reflect.apply/shim'), shim, 'shim named export matches deep export');
	t.equal(await import('reflect.apply/implementation'), implementation, 'implementation named export matches deep export');
	t.equal(await import('reflect.apply/polyfill'), getPolyfill, 'getPolyfill named export matches deep export');

	t.end();
});
