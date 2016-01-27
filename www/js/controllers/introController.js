'use strict';
myApp.controller('introController', ['$scope', '$timeout', '$location', '$cordovaDevice', 'deviceAuthService', function($scope, $timeout, $location, $cordovaDevice, deviceAuthService) {




    document.addEventListener("deviceready", function() {

        $scope.platforms = $cordovaDevice.getPlatform();
        $scope.device = $cordovaDevice.getUUID();
        deviceAuthService.getDeviceAuthService($scope.device, $scope.platforms).then(function(results) {

            if (results.data) {
                $location.path('/views/home');

            } else {
                $location.path('/views/register');

            }

        }, function(error) {
            alert(error.data.message);
        });
    }, false);














}]);
