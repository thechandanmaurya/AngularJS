// Create a Module
var app = angular.module('FirstApp',[]);

// Create a Controller
app.controller('FirstAppCtrl',function($scope) {
    $scope.time ="" ;
    $scope.msg = '';
    $scope.displayMsg = function() {

        if($scope.time !== null){
            if($scope.time <= 12){
                $scope.msg = 'Good Morning';
            }
            else if($scope.time >12 && $scope.time <= 17){
                $scope.msg = 'Good Afternoon';
            }
            else if($scope.time > 17 && $scope.time <= 24){
                $scope.msg = 'Good Evening';
            }
            else{
                $scope.msg = 'Enter Proper Time';
            }
        }
        else{
            $scope.msg = '';
        }


    };
});