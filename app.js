let app = angular.module('myApp', []);

app.controller('myCtrl', ['$scope', function($scope) {
  $scope.name = 'John Doe';
  $scope.age = 30;
  
  $scope.concatenation = function(){
    return $scope.name + ' ' + $scope.age;
  }

  $scope.isDead = false;
  $scope.message = 'RIP';

}]);