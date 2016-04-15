var React = require('react');
var ReactDom = require('react-dom');

console.log("Hello from JSX!");

var GroceryItemList = require('./components/GroceryItemList.jsx');

var GroceryItemStore = require('./stores/GroceryItemStore.jsx');

var initial = GroceryItemStore.getItems();

function render(){
    ReactDom.render(<GroceryItemList items={initial}/>, app);
}
GroceryItemStore.onChange(function(items){
        console.log("Store changes");
        initial = items;
        render();
});

render();