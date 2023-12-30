let app = angular.module('myApp', []);


app.controller('myCtrl', ['$scope', function($scope) {
  // Pour stocker les données, on utilise le scope
  // String exemple
  $scope.name = 'John Doe';
  // Number exemple
  $scope.age = 30;
  // Boolean exemple
  $scope.show = true;
  // Array exemple
  $scope.employees = [
    {
      fname: 'Chandler',
      lname: 'Bing'
    },
    {
      fname: 'Joey',
      lname: 'Tribbiani'
    },
    {
      fname: 'Ross',
      lname: 'Geller'
    }
  ];
  // function exemple
  $scope.toggleshow = function(){
    $scope.show = !$scope.show;
  }
  // form submit exemple
  $scope.form = {};
  $scope.addReview = function(){
    $scope.reviews.push($scope.form);
    $scope.form = {};
  }

  $scope.reviews = [
    {
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.',
      by: 'John.Doe@email.com',
    },
    {
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.',
      by: 'John.Doe@email.com',
    },
    {
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.',
      by: 'John.Doe@email.com',
    }
  ]



}]);