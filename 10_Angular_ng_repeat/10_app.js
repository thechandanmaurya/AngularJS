// Create a Module
var app = angular.module('GoodMorningApp' , []);

// Create a Controller
app.controller('GoodMorningAppCtrl',function($scope) {
    $scope.username = null;
    $scope.times = null;
    $scope.timesArray = [];
    $scope.currentTime = null;
    $scope.wishMsg = '';
    $scope.getNumber= function() {
        if($scope.times !== null){
            $scope.timesArray = [];
            for(var i=0; i<$scope.times; i++){
                $scope.timesArray[i] = (i+1);
            }
        }
        else{
            $scope.timesArray = [];
        }
    };
    $scope.wishMe = function() {
        if($scope.currentTime !== null){
            if($scope.currentTime <= 12){
                $scope.wishMsg = 'Good Morning';
            }
            else if($scope.currentTime >12 && $scope.currentTime <= 17){
                $scope.wishMsg = 'Good Afternoon';
            }
            else if($scope.currentTime > 17 && $scope.currentTime <= 24){
                $scope.wishMsg = 'Good Evening';
            }
            else{
                $scope.wishMsg = 'Enter Proper Time';
            }
        }
        else{
            $scope.wishMsg = '';
        }

    };
});