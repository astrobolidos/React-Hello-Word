var React = require('react/addons');
var CommandIcon = require('./commandIcon.react');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var List = React.createClass({
	render: function(){
		return (
			<ul>
				<ReactCSSTransitionGroup transitionName="example">
				{
					this.props.items.map(function(item) {
						var divStyle = { backgroundImage: 'url(images/' + item.url + ')',}

						return <li key={item.key}>
							<div style={divStyle} className="circular"></div>
							<span className="userName">{item.desc}</span>
							<CommandIcon />
							</li>
					})
				}
				</ReactCSSTransitionGroup>
			</ul>
			)  
	}
});

module.exports = List;