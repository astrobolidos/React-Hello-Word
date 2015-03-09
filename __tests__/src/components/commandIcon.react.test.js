var ciPath = '../../../js/components/commandIcon.react.js';
jest.dontMock(ciPath);

// var React = require('react/addons');
// var CommandIcon = require(ciPath);
// var TestUtils = React.addons.TestUtils;

describe('CommandIcon Tests', function(){
	it('change style after mouse over', function(){
		var React = require('react/addons');
		var commandIcon = require(ciPath);
		var TestUtils = React.addons.TestUtils;

		// Render a commandIcon
		var icon = TestUtils.renderIntoDocument(<CommandIcon />);

	});
});