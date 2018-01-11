angular.module('HelloUserApp', [])
    .controller('HelloUserController', ['$scope','$sce', function ngBindHtmlCtrl($scope, $sce) {
        $scope.NameChange = function () {
		console.log("hi");
            var escapedUserInput = escapeForHtml("<i>Hello</i> " + $scope.name);
		console.log(escapedUserInput);
            $scope.greeting =$sce.trustAsHtml(escapedUserInput);
        };
        $scope.deleteUserAccount = function () {
            $scope.greeting = "User Account deleted";
        };
    }])

function escapeForHtml(input) {
    return input.replace("<img", "").replace("<script", "") // Dangerous, what about <iframe or recursive XSS
}
