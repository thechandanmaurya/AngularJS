// Create a Module
var app = angular.module('NumberApp',[]);

// Create a Controller
app.controller('NumberAppCtrl',function($scope) {
    $scope.theNumber = null;
    $scope.numberWord = '';
    $scope.numberArray = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
    $scope.displayStringNumber = function() {
        console.log($scope.theNumber);
        if($scope.theNumber !== undefined){
            var strNum = $scope.theNumber.toString();
            var tempStr = '';
            for(var i=0; i<strNum.length; i++){
                var ch = strNum.charAt(i);
                tempStr += $scope.numberArray[ch] + ' ';
            }
            $scope.numberWord = tempStr;
        }
        else{
            $scope.numberWord = '';
        }
    };
});

app.directive('numbersOnly', function() {
    var directive = {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9-]/g, '');
                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                return undefined;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }

    };
    return directive;
});