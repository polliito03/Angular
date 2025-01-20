(function () {

'use strict';

angular.module('MyConversionApp', [])
.controller('tempController', TemperatureController)
.service('historyService', HistoryService)
.filter('celsius', CelsiusFilter);

TemperatureController.$inject = ['$scope', 'celsiusFilter', 'historyService'];


//
// Service: HistoryService
//
function HistoryService()
{
    var historyArray = [];

    this.addItem = function(celsius, fare) {
        var item = {
            _celsius: celsius,
            _fare: fare
        };

        historyArray.push(item);
    };

    this.getItems = function() {
        return historyArray;
    };
}


//
// Controller: TemperatureController
//
function TemperatureController($scope, celsiusFilter, historyService)
{
    this.items = historyService.getItems();

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

            // add to history list
            historyService.addItem($scope.cent, $scope.centOut);
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

            // add to history list
            historyService.addItem($scope.fareOut, $scope.fare);
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


}) ();