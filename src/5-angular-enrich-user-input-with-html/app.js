angular.module('HelloUserApp', [])
    .controller('HelloUserController', ['$scope','$sce', function ($scope, $sce) {
       $scope.greeting = $sce.trustAsHtml( "<script>alert('XSS');</script>");
        $scope.NameChange = function () {
            $scope.greeting =$sce.trustAsHtml( "<i>Hello</i> " + $scope.name);
        };
    }])

