var app = angular.module('quoteBook');

app.controller('mainCtrl', ['$scope','myServiceQuote', function($scope,myServiceQuote){
	$scope.test = "What's up!";
	$scope.quote = myServiceQuote.getData();
	myServiceQuote.getData($scope.add);
	//myServiceQuote.getData($scope.remove);
	//myServiceQuote.getData($scope.filter);
}]);