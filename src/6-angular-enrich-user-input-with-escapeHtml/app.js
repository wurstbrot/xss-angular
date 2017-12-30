angular.module('HelloUserApp', [])
    .controller('HelloUserController', ['$scope','$sce', function ngBindHtmlCtrl($scope, $sce) {
        $scope.NameChange = function () {
            var escapedUserInput = escapeForHtml("<i>Hello</i> " + $scope.name);
            $scope.greeting =$sce.trustAsHtml(escapedUserInput);
        };
        $scope.deleteUserAccount = function () {
            $scope.greeting = "User Account deleted";
        };
    }])

function escapeForHtml(input) {
    return input.replace("<script>", "") // Dangerous, what about <script type="javascript">
}