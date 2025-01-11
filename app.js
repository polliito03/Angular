(function () {

'use strict';

angular.module('MyFirstApp', [])

.controller('MyFirstController', function ($scope) {
    $scope.cent = 0;
    $scope.centOut = 32;
    $scope.fare = 32;
    $scope.fareOut = 0;

    $scope.calculateCent = function() {
        if ( ! $scope.cent )
            $scope.centOut = "";
        else
            $scope.centOut = Math.round(getFahrenheit($scope.cent));
    };

    $scope.calculateFare = function() {
        if ( ! $scope.fare )
            $scope.fareOut = "";
        else
            $scope.fareOut = Math.round(getCelsius($scope.fare));
    };

    function getFahrenheit(string) {
        var x = parseInt(string, 10);
        var temp = (x * 9/5) + 32;
        return temp;
    };

    function getCelsius(string) {
        var x = parseInt(string, 10);
        var temp = (x - 32) * 5/9;
        return temp;
    };

});
/*
.controller('UpperController', function ($scope, $filter) {
    $scope.name2 = "uno";

    $scope.upperFunc = function() {
        var upCase = $filter('uppercase');
        $scope.name2 = upCase($scope.name2);
    };

});
*/
// END
}) ();