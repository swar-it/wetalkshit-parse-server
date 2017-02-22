var _ = require('underscore');

Parse.Cloud.define('hello', function(req, res) {
    res.success('Hi');
});

Parse.Cloud.define("sendPushNotification", function(request, response) {

    var user = request.user;
    var params = request.params;
    var recipient = params.recipient
    var data = params.data

    var recipientUser = new Parse.User();
    recipientUser.id = recipient;

    var pushQuery = new Parse.Query(Parse.Installation);
    pushQuery.equalTo("user", recipientUser);

    Parse.Push.send({
        where: pushQuery, // Set our Installation query
        data: data
      }, { success: function() {
      }, error: function(error) {
      }, useMasterKey: true});
    
    response.success('success');
});