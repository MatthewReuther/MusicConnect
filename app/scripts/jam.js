'Use Strict';

app.controller('JamController', function($scope, BASE, $firebase) {

  var ref = new Firebase(BASE); //initizalies with firebase
  var fbJams = $firebase(ref.child('jams')).$asArray(); //creates a jams then returns them as an array

  $scope.postJam = function(jam) {
    fbJams.$add(jam);
  }
});