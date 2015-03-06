var React = require('react/addons');
var List = require('./list.react');

var FilteredList = React.createClass({
	filterList: function(event){
		var updatedList = this.state.initialItems;
		updatedList = updatedList.filter(function(item){
			return item.desc.toLowerCase().search(
				event.target.value.toLowerCase()) !== -1;
		});
		this.setState({items: updatedList});
	},
	getInitialState: function(){
		return {
			initialItems: [
			{ key:1, desc:"Daddy Pig", url:"daddypig.png" },
			{ key:2, desc:"Mommy Pig", url:"mommypig.png" },
			{ key:3, desc:"Peppa Pig", url:"peppa.png" },
			{ key:4, desc:"George Pig", url:"george.png" },
			{ key:5, desc:"Mr Fox", url:"mrfox.png" },
			{ key:6, desc:"Miss Rabbit", url:"missrabbit.png" }
			],
			items: []
		}
	},
	componentWillMount: function(){
		this.setState({items: this.state.initialItems})
	},
	render: function(){
		return (
			<div className="filter-list">
				<input type="text" placeholder="Search" onChange={this.filterList}/>						
					<List items={this.state.items} key={this.state}/>
			</div>
			);
	}
});

module.exports = FilteredList;