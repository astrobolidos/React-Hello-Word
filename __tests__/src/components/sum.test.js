var path = '../../../js/components/sum.js'
jest.dontMock(path);

describe('sum', function() {
	it('adds 1 + 2 to equal 3', function() {

		var sum = require(path);
		expect(sum(1, 2)).toBe(3);
	});
});