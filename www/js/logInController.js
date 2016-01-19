myApp.controller('logInController', ['$scope','$location', function($scope,$location) {

    $scope.logIn = function() {
        $location.path('/views/home');
    }

}]);
