(function () {

'use strict';

angular.module('MyFirstApp', [])

.controller('MyFirstController', function ($scope) {

$scope.name = "";
$scope.totalValue = 0;

$scope.calculateValue = function() {
    var tempValue = calculateString($scope.name);
    $scope.totalValue = tempValue;
};

function calculateString(string) {
    var temp = 0;
    for (var i=0; i < string.length; i++) {
        temp += string.charCodeAt(i);
    }
    return temp;
};

});

}) ();