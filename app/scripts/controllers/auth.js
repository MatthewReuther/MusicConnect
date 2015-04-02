'use strict';

app.controller('AuthController', function($scope, $location, Auth) {

  $scope.register = function(user) {
    Auth.register(user)
      .then(function() {
        console.log('success', "Registered successfully");
        $location.path('/');
      }, function(err) {
        console.log("Error...");
      });
  };

  // $scope.register = function (user) {
  //   Auth.register($scope.user, function (err, authData) {
  //     if (err && err.code === 'EMAIL_TAKEN') {
  //       console.log('Error creating user:', err);
  //       vm.login();
  //     } else if (err) {
  //       console.log('Error creating user:', err)
  //     } else {
  //       console.log('User created successfully', authData);
  //       $scope.login();
  //     }
  //   });
  // };


  $scope.login = function(user) {
     Auth.login(user)
      .then(function() {
        console.log('success', "Logged in successfully");
        $location.path('/');
      }, function(err) {
        console.log("Error...");
      });
  };

  $scope.changePassword = function(user) {
     Auth.changePassword(email, oldPass, newPass)
      .then(function() {
        // Reset form
        $scope.email = '';
        $scope.oldPass = '';
        $scope.newPass = '';

        console.log('success', "Password changed successfully");
      }, function(err) {
        console.log("Error...");
      });
  };

});