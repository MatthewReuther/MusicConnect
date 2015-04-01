'use strict';

app.factory('Auth', function(BASE, $firebaseAuth, $firebase) {

  var ref = new Firebase(BASE);
  var auth = $firebaseAuth(ref);

  var Auth = {

    user: {},

    login: function(user) {
      return auth.$authWithPassword(
        {email: user.email,
         password: user.password}
      );
    },

    register: function(user) {
      return auth.$createUser(
        {email: user.email,
         password: user.password
       })
      .then(
        function() {
          return Auth.login(user);
        });
    },

    logout: function(user) {
      auth.$unauth();
    },

    changepassword: function(user) {
      return auth.$changepassword(
        {email: user.email,
         oldPassword: user.oldpass,
         newPassword: user.newpass
       });
    },

    signedIn: function() {
      return Auth.user && Auth.user.provider;
    },

    $auth$onAuth(function(authData) {
      if(authData) {
        angular.copy(authData, Auth.user);
      }
        else {
          angular.copy({}, Auth.user);
      }
    });

  return Auth;

});