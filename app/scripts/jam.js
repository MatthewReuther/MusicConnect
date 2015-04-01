'Use Strict';

app.controller('JamController', function($scope) {
  $scope.postJam = function(jam) {
    console.log(jam);
  }
});