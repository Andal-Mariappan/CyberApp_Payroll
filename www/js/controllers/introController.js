myApp.controller('introController', ['$scope', '$timeout', '$location', '$cordovaDevice', function($scope, $timeout, $location, $cordovaDevice) {



    document.addEventListener("deviceready", function() {

        $scope.platforms = $cordovaDevice.getPlatform();
        $scope.device = $cordovaDevice.getUUID();

    }, false);


    $timeout(function() {
        $location.path('/views/home');
    }, 3000);



}]);
