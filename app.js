(function () {

'use strict';

angular.module('MyConversionApp', [])
.controller('tempController', TemperatureController);

TemperatureController.$inject = ['$scope'];

function TemperatureController($scope) {
    $scope.cent = 0;
    $scope.centOut = 32;
    $scope.fare = 32;
    $scope.fareOut = 0;

    // Function to diff amount from Celsius number
    $scope.diffCent = function(diff) {
        if ( $scope.cent === "" )
            $scope.centOut = "";
        else {
            var x = parseInt($scope.cent, 10);
            var n = parseInt(diff, 10);
            $scope.cent = x + n;
            $scope.calculateCent();
        }
    };

    // Function to diff amount from Fahrenheit number
    $scope.diffFare = function(diff) {
        if ( $scope.fare === "" )
            $scope.fareOut = "";
        else {
            var x = parseInt($scope.fare, 10);
            var n = parseInt(diff, 10);
            $scope.fare = x + n;
            $scope.calculateFare();
        }
    };

    $scope.calculateCent = function() {
        if ( $scope.cent === "" )
            $scope.centOut = "";
        else
            $scope.centOut = Math.round(getFahrenheit($scope.cent));
    };

    $scope.calculateFare = function() {
        if ( $scope.fare === "" )
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

};
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