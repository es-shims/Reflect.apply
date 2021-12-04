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
	t.equal((await import('reflect.apply/shim')).default, shim, 'shim named export matches deep export');
	t.equal((await import('reflect.apply/implementation')).default, implementation, 'implementation named export matches deep export');
	t.equal((await import('reflect.apply/polyfill')).default, getPolyfill, 'getPolyfill named export matches deep export');

	t.end();
});
