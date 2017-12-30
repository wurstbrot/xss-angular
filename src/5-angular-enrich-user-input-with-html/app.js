angular.module('HelloUserApp', [])
    .controller('HelloUserController', ['$scope','$sce', function ngBindHtmlCtrl($scope, $sce) {
        $scope.NameChange = function () {
            $scope.greeting =$sce.trustAsHtml( "<i>Hello</i> " + $scope.name);
        };
    }])

