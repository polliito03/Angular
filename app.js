(function () {

'use strict';

angular.module('MyConversionApp', [])
.controller('tempController', TemperatureController)
.filter('celsius', CelsiusFilter);

TemperatureController.$inject = ['$scope', 'celsiusFilter'];

//
// Controller: TemperatureController
//
function TemperatureController($scope, celsiusFilter) {
    $scope.cent = 0;
    $scope.centOut = 32;
    $scope.fare = 32;
    $scope.fareOut = 0;

    $scope.tempArray = [
        {celsius: 0,
        fare: getFahrenheit("0")},
        {celsius: 5,
        fare: getFahrenheit("5")},
        {celsius: 10,
        fare: getFahrenheit("10")},
    ];

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
        else {
            //$scope.fareOut = Math.round(getCelsius($scope.fare));
            var celsius = celsiusFilter($scope.fare);
            $scope.fareOut = Math.round(celsius);
        }
    };

    function getFahrenheit(string) {
        var x = parseInt(string, 10);
        var temp = (x * 9/5) + 32;
        return temp;
    };

};  // end controller

// Custom filter to convert temperature to celsius
function CelsiusFilter() {
    return function (input) {
        var temp = (input - 32) * 5/9;
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