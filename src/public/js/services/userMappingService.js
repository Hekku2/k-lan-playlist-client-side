var userServices = angular.module('userServices', []);

userServices.factory('UserService', function() {
    var fac = {};
    fac.getRoleName = function(roleId){
        var roles = [undefined, 'anon', 'user', 'admin'];
        var name = roles[roleId];
        if (!name)
            return 'unknown';
        return name;
    };

    return fac;
});