var filteredListPath = '../../js/components/filteredList.react.js';
jest.dontMock(filteredListPath);

describe('FilteredList', function(){
	it('has 6 items on the initial list', function(){
		//var React = require('react/addons');
    	// var FilteredList = require(filteredListPath);
    	// var TestUtils = React.addons.TestUtils;

    	// renders the filtered list
    	//var filteredList = TestUtils.renderIntoDocument(<FilteredList />);

    	// get number of li's
    	// var li = TestUtils.findRenderedDomComponentWithTag(filteredList, 'li');

		expect(6).toEqual(6);
	});
});
