angular.module('HelloUserApp', ["ngSanitize"]) // Add ngSanitize
    .controller('HelloUserController', function ($scope) {
        $scope.NameChange = function () {
            $scope.greeting = "Hello " + $scope.name;
        };
        $scope.deleteUserAccount = function () {
            $scope.greeting = "User Account deleted";
        };
    });