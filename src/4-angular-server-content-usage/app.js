angular.module('HelloUserApp', [])
    .controller('HelloUserController', function ($scope, $http) {
            $http.get("name.json")
                .then(function(response) {
                    $scope.names= response.data;
                });
        $scope.deleteUserAccount = function () {
            $scope.greeting = "User Account deleted";
        };
    });