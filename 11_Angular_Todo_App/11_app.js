// Create a Module
var app = angular.module('GroceryApp',[]);

// Create a Controller
app.controller('GroceryAppCtrl',function($scope) {
    $scope.groceryItem = '';
    $scope.groceryList = [];
    $scope.editMode = false;
    $scope.addGroceryItem = function() {
        if($scope.groceryItem !== ''){
            // If NOT Exists
            if($scope.groceryList.indexOf($scope.groceryItem.toUpperCase()) === -1){
                $scope.groceryList.push($scope.groceryItem.toUpperCase());
                $scope.groceryItem = '';
            }
            // If Exists
            else{
                alert('The ' + $scope.groceryItem + ' is already exists');
                $scope.groceryItem = '';
            }
        }
        else{
            alert('Please Add at least One Item');
        }
    };
    $scope.OnEditMode = function() {
        $scope.editMode = true;
    };
    $scope.OFFEditMode = function() {
        $scope.editMode = false;
    };
    $scope.deleteGroceryItem = function(index) {
        $scope.groceryList.splice(index,1);
    };
    $scope.replaceGroceryItem = function(index,item) {
        $scope.groceryList.splice(index,1,item);
    };
});