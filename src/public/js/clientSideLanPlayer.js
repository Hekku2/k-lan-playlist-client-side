var clientSide = angular.module('clientSideLanPlayer', [
    'ngRoute',
    'userControllers',
    'statusControllers',
    'mainControllers',
    'userServices'
]);

clientSide.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.
            when("/users", {
                templateUrl: "partials/users.jade",
                controller: "UserListCtrl"
            }).
            when('/user/:userId', {
                templateUrl: "partials/user.jade",
                controller: "UserDetailsCtrl"
            }).
            when('/userEdit/:userId', {
                templateUrl: "partials/userEdit.jade",
                controller: "UserEditCtrl"
            }).
            when("/status", {
                templateUrl: "partials/status.jade",
                controller: "StatusCtrl"
            }).
            otherwise({
                redirectTo: '/users'
            });
    }
]);