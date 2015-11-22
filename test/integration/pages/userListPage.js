exports.users = function(root){
    function nameSelect(){
        return by.css('td:nth-child(2)');
    }

    return root.all(by.repeater('user in users')).map(function(element, index) {
        return {
            username: element.element(nameSelect()).getText()
        };
    });
};