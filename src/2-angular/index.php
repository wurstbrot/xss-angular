<html>
<head>
    <meta charset="utf-8">
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>
    <script src="app.js"></script>
</head>
<body>
<div ng-app="HelloUserApp">
    <div ng-controller="HelloUserController">
        <input ng-model="name" ng-keyup="NameChange()">
        <h1>{{greeting}}</h1>
    </div>
</div>
</body>
</html>