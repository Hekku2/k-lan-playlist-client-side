var dbTools = require('../test-db-tools');
var userListPages = require('./pages/userListPage');

describe("User tests", function() {
    beforeEach(function() {
        dbTools.initializeTestData();
    });

    it('Users-page has list of users', function(done) {
        browser.get('users');

        userListPages.users(element).then(function(result){
            expect(result[0].username).toMatch('admin');
            expect(result[1].username).toMatch('user');
            done();
        });
    });
});