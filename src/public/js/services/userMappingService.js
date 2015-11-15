var userServices = angular.module('userServices', []);

userServices.factory('UserService', function() {
    var fac = {};
    fac.getRoleName = function(roleId){
        var roles = ['', 'anon', 'user', 'admin'];
        return roles[roleId];
    };

    return fac;
});