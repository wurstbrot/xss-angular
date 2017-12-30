<html>
<head>
    <meta charset="utf-8">
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.6/angular.js"></script>
</head>
<body>
<div ng-app>
    <?php
        echo "Accept Input (reflected XSS): " . $_GET['input'];
    ?>
</div>
</body>
</html>