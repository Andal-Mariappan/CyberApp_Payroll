'use strict';
myApp.controller('introController', ['$scope', '$timeout', '$location', '$cordovaDevice', 'deviceAuthService', function($scope, $timeout, $location, $cordovaDevice, deviceAuthService) {


    $scope.platforms = "Android";
    $scope.device = "60a40bb7e2972607";

    document.addEventListener("deviceready", function() {

        $scope.platforms = $cordovaDevice.getPlatform();
        $scope.device = $cordovaDevice.getUUID();

        deviceAuthService.getDeviceAuthService($scope.device, $scope.platforms).then(function(results) {

            if (results.data) {
                alert(results.data.Email + " || " + $scope.device + " || " + $scope.platforms);
                $location.path('/views/home');

            } else {
                alert(results.data + " || " + $scope.device + " || " + $scope.platforms);
                $location.path('/views/register');

            }

        }, function(response) {
            var errors = [];
            for (var key in response.data.Message) {
                for (var i = 0; i < response.data.Message[key].length; i++) {
                    errors.push(response.data.Message[key][i]);
                }
            }
            var message = "Failed to register user due to:" + errors.join(' ');
            alert(message);
        });

    }, false);


    deviceAuthService.getDeviceAuthService($scope.device, $scope.platforms).then(function(results) {

        if (results.data) {
            alert(results.data.Email + " || " + $scope.device + " || " + $scope.platforms);
            $location.path('/views/home');

        } else {
           
            $location.path('/views/register');

        }

    }, function(response) {
        var errors = [];
        for (var key in response.data.Message) {
            for (var i = 0; i < response.data.Message[key].length; i++) {
                errors.push(response.data.Message[key][i]);
            }
        }
        var message = "Failed to register user due to:" + errors.join(' ');
        alert(message);
    });


}]);
