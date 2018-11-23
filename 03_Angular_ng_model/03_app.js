// Create an Angular JS Module
var app = angular.module('LoginApp',[]);

// Create a controller
app.controller('LoginAppCtrl',function($scope) {
    $scope.username ="" ;
    $scope.email = "";
    $scope.password = "";
    $scope.remPassword = "";
});