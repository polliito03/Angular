( function() {

'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

// Protect from minimization
LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
    $scope.textLunch = "";
    $scope.textMessage = "";

    // Checks input entered by the user
    $scope.checkText = function() {
        if ( $scope.textLunch === "" ) {
            $scope.textMessage = "Please enter data first";
            return;
        }

        // split text on a comma
        const words = $scope.textLunch.split(',');

        if ( words.length <= 3 )
            $scope.textMessage = "Enjoy!";
        else
            $scope.textMessage = "Too much!";
    };

};

}) ();