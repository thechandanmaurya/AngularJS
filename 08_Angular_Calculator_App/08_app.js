// Create a Module
var app = angular.module('CalculatorApp',[]);

// Create a Controller
app.controller('CalculatorAppCtrl',function($scope) {
    $scope.firstNumber = null;
    $scope.secondNumber = null;
    $scope.operator = '+';
    $scope.result = 'RESULT';
    $scope.changeOperator = function(symbol) {
        $scope.operator = symbol;
    };
    $scope.calculate = function() {
        if($scope.firstNumber !== null && $scope.secondNumber !== null){
            switch($scope.operator){
                case '+':
                    $scope.result = $scope.firstNumber + $scope.secondNumber;
                    break;
                case '-':
                    $scope.result = $scope.firstNumber - $scope.secondNumber;
                    break;
                case '/':
                    $scope.result = $scope.firstNumber / $scope.secondNumber;
                    break;
                case '*':
                    $scope.result = $scope.firstNumber * $scope.secondNumber;
                    break;
                default:
                    $scope.result = 'RESULT';
                    break;
            }
        }
    };
    $scope.clear = function() {
        $scope.firstNumber = null;
        $scope.secondNumber = null;
        $scope.operator = '+';
        $scope.result = 'RESULT';
    };
});