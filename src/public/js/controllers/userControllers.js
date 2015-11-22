var userControllers = angular.module('userControllers', ['clientSideLanPlayer.config']);

userControllers.controller('UserListCtrl', ['$scope', '$http', 'appConfig', 'UserService',
    function ($scope, $http, appConfig, UserService) {
        $scope.users = [];

        $http.get(appConfig.services.UserService + 'users').success(function(data) {

            data.forEach(function(element){
                element.rolename = UserService.getRoleName(element.role)
            });

            $scope.users = data;
        });
    }
]);

userControllers.controller('UserDetailsCtrl', ['$scope', '$http', '$route', '$routeParams', 'appConfig', 'UserService',
    function ($scope, $http, $route, $routeParams, appConfig, UserService) {
        $scope.user = {};
        $scope.$on('$routeChangeSuccess', function() {
            $http.get(appConfig.services.UserService + 'user/' + $routeParams.userId).error(function(err){
                $scope.user = {};
            }).success(function(data) {
                data.rolename = UserService.getRoleName(data.role);
                $scope.user = data;
            });
        });
    }
]);

userControllers.controller('UserEditCtrl', ['$scope', '$http', '$route', '$routeParams', '$location', 'appConfig', 'UserService',
    function ($scope, $http, $route, $routeParams, $location, appConfig, UserService) {
        $scope.user = {};
        $scope.$on('$routeChangeSuccess', function() {
            $http.get(appConfig.services.UserService + 'user/' + $routeParams.userId).error(function(err){
                $scope.user = {};
            }).success(function(data) {
                data.rolename = UserService.getRoleName(data.role);
                $scope.user = data;
            });
        });

        $scope.save = function(){
            $http.post(appConfig.services.UserService + 'user/' + $routeParams.userId, $scope.user).error(function(err){
                //TODO Show error
            }).success(function(){
                //Show success
                $location.path('/user/' + $scope.user.id);
            });
        };
    }
]);