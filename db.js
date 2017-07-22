var categories = {};

var createCategory = function(categoryName){
	if(!(categoryName in categories)){
		categories[categoryName] = [];
	}
	else {
		return false;
	}
}

var deleteCategory = function(categoryName){
	var newCats = {};
	var keys = Object.keys(categories)
	for(var i = 0; i < keys.length; i++){
		if(keys[i] == categoryName){
			continue;
		}
		else{
			newCats[keys[i]] = categories[keys[i]];
		}
	}
	categories = newCats;
}

var getCategoryNames = function(){
	return Object.keys(categories);
}
var createProduct = function(categoryName, productName){
	categories[categoryName].push({
		"name": productName,
		"id": (categories[categoryName].length+1)
	})
}

var deleteProduct = function(categoryName, productId){
	categories[categoryName] = categories[categoryName].filter(function(product){
		return Number(productId) !== Number(product.id)
	});
}

var getProductsByCategory = function(categoryName){
	return categories[categoryName];
}


module.exports = {
	createCategory:createCategory,
	deleteCategory:deleteCategory,
	getCategoryNames:getCategoryNames,
	createProduct:createProduct,
	deleteProduct:deleteProduct,
	getProductsByCategory:getProductsByCategory
}