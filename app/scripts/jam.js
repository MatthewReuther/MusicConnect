'Use Strict';

app.controller('JamController', function($scope, BASE, $firebase, $location) {

  var ref = new Firebase(BASE); //initizalies with firebase
  var fbJams = $firebase(ref.child('jams')).$asArray(); //creates a jams then returns them as an array

  $scope.jams = fbJams
  $scope.postJam = function(jam) {
    fbJams.$add(jam);
    $location.path('/browse-jams');
  }
});