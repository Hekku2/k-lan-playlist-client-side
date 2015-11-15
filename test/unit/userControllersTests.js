describe('userControllers', function() {
    beforeEach(module('userControllers'));

    var $httpBackend;
    var $rootScope;
    var createController;
    var appConfig;

    var userCreator = function(id){
        return {
            id: id,
            username: 'test' + id,
            role: 3
        };
    };

    beforeEach(inject(function($injector) {
        $httpBackend = $injector.get('$httpBackend');
        $rootScope = $injector.get('$rootScope');
        appConfig = $injector.get('appConfig');
    }));

    describe('UserListCtrl', function(){
        beforeEach(inject(function($injector) {
            var $controller = $injector.get('$controller');
            var userService= {
                getRoleName: function(roleId){return 'admin';}
            };
            createController = function() {
                return $controller('UserListCtrl', {'$scope' : $rootScope, 'UserService' : userService });
            };
        }));

        it('users contains list of users', function() {
            $httpBackend.expectGET(appConfig.services.UserService + 'users').respond(200, [
                userCreator(1),
                userCreator(2)
            ]);
            createController();
            $httpBackend.flush();
            expect($rootScope.users).toEqual([
                {
                    id: 1,
                    username: 'test1',
                    role: 3,
                    rolename: 'admin'
                },
                {
                    id: 2,
                    username: 'test2',
                    role: 3,
                    rolename: 'admin'
                }
            ]);
        });
    });

    describe('UserDetailsCtrl', function(){
        beforeEach(inject(function($injector) {
            var $controller = $injector.get('$controller');
            var $route = {};
            var $routeParams = {userId:666};
            var userService= {
                getRoleName: function(roleId){return 'admin';}
            };
            createController = function() {
                return $controller('UserDetailsCtrl', {
                    '$scope' : $rootScope,
                    '$route': $route,
                    '$routeParams' : $routeParams,
                    'UserService' : userService});
            };
        }));

        it('user retrieves correct user', function() {
            var expectedUserId = 666;
            $httpBackend.expectGET(appConfig.services.UserService + 'user/' + expectedUserId).respond(200, userCreator(expectedUserId));
            createController();
            $rootScope.$broadcast('$routeChangeSuccess', {});
            $httpBackend.flush();
            var testuser = userCreator(expectedUserId);
            expect($rootScope.user.id).toEqual(testuser.id);
            expect($rootScope.user.username).toEqual(testuser.username);
            expect($rootScope.user.role).toEqual(testuser.role);
            expect($rootScope.user.rolename).toEqual('admin');
        });
    });
});