var React = require('react');

var CommandIcon = React.createClass({
	getInitialState: function() {
		return { isDoubleSize: false };
	},
	iconMouseOver: function() {
		console.log('iconMouseOver');
		this.setState({ isDoubleSize: true });
	},
	iconMouseOut: function () {
		console.log('iconMouseOut');
		this.setState({ isDoubleSize: false });
	},
	render: function() {
		console.log('render:'+this.state.isDoubleSize);
		var cx = React.addons.classSet({
			'commandIcon fa fa-envelope-o': true,
			'fa-2x': this.state.isDoubleSize
		});

		return (
			<i className={cx} onMouseOver={this.iconMouseOver} onMouseOut={this.iconMouseOut}></i>
		)
	}
});

module.exports = CommandIcon;