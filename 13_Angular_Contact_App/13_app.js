// Create a Module
angular.module('ContactApp',[]).controller('ContactAppCtrl',function($scope,$http) {
    $scope.contactList = null;
    $scope.selectedPerson = null;
    $http.get('https://gist.githubusercontent.com/thenaveensaggam/3c6896638af3ddb93ecf978b3e002b32/raw/7c34b13fec4997e0847d3481145d58dbc8190615/16112018.json').then(function(response) {
        $scope.contactList = response.data.contacts;
        console.log($scope.contactList);
    });
    $scope.selectAContact = function(index) {
        $scope.selectedPerson = $scope.contactList[index];
    };
});

