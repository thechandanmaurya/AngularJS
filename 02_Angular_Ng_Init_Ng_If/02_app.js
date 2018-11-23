// Create an Angular Module
var app  = angular.module('AgeApp',[]);

// Create a Controller
app.controller('AgeAppCtrl',function($scope) {
    $scope.age = null;
});