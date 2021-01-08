'use strict';

var testXThrow = function (values, t, func) {
	var checker = function checker(item) {
		try {
			func(item);
			return false;
		} catch (e) {
			return e instanceof TypeError;
		}
	};

	values.forEach(function (item) {
		t.ok(checker(item), 'testXThrow ' + item);
	});
};

var testCallableThrow = testXThrow.bind(null, [null, undefined, 1, 'string', true, [], {}]);

module.exports = function (apply, t) {
	t.test('throws if target isn’t callable', function (st) {
		testCallableThrow(st, function (item) {
			return apply(item, null, []);
		});
		st.end();
	});

	t.test('works also with redefined apply', function (st) {
		st.equal(apply(Array.prototype.push, [1, 2], [3, 4, 5]), 5, 'apply(Array.prototype.push, [1, 2], [3, 4, 5])');

		var F = function F(a, b, c) {
			return a + b + c;
		};

		F.apply = false;

		st.equal(apply(F, null, [1, 2, 3]), 6, 'apply(F, null, [1, 2, 3])');

		var G = function G(last) {
			return this.x + 'lo' + last;
		};

		G.apply = function nop() {};

		st.equal(apply(G, { x: 'yel' }, ['!']), 'yello!', "apply(G, { x: 'yel' }, ['!'])");
		st.end();
	});
};
