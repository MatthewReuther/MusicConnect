'Use Strict';

app.controller('JamController', function($scope, BASE, $firebase, $location, $routeParams) {

  var ref = new Firebase(BASE); //initizalies with firebase
  var fbJams = $firebase(ref.child('jams')).$asArray(); //creates a jams then returns them as an array
  var jamId = $routeParams.jamId;

  if(jamId) {
    $scope.selectedJam = getJam(jamId);
  }

  function getJam(jamId) {
    return $firebase(ref.child('jams').child(jamId)).$asObject();
  };

  $scope.jams = fbJams
  $scope.postJam = function(jam) {
    fbJams.$add(jam);
    $location.path('/browse-jams');
  };

  $scope.updateJam = function (jam) {
    $scope.selectedJam.$save(jam);
    $location.path('/browse-jams.html');
  };

});