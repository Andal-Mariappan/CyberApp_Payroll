myApp.controller('introController', ['$scope','$timeout','$location', function($scope,$timeout,$location) {
    


    $timeout(function() {
        $location.path('/views/home');
    }, 3000);



}]);
