'use strict';

app.controller('NavController', function($scope, $location, Auth) {

  $scope.currentUser = Auth.user;
  $scope.signedIn = Auth.signedIn;

  $scope.logout = function() {
    Auth.logout();
    console.log("Logged out successfully");
    $location.path('/main.html');
  };

});