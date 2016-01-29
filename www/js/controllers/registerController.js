'use strict';
myApp.controller('registerController', ['$scope', '$location', '$timeout', 'authService', 'deviceAuthService', '$ionicPopup', function($scope, $location, $timeout, authService, deviceAuthService, $ionicPopup) {

    $scope.savedSuccessfully = false;
    $scope.message = "";

    $scope.registration = {
        email: "",
        password: "",
        confirmPassword: ""
    };

    $scope.signUp = function() {
        var data = {
            Email: $scope.registration.email,
            DeviceID: "",
            Platform: "",
        };
        deviceAuthService.createDeviceAuthService(data).then(function(response) {
                var pass = data.DeviceID.substring(0, 2) + '#Dv0' + data.DeviceID.substring(2, 4);
                $scope.registration = {
                    email: data.DeviceID + "_" + $scope.registration.email,
                    password: pass,
                    confirmPassword: pass
                };
                authService.saveRegistration($scope.registration).then(function(response) {

                        $scope.savedSuccessfully = true;
                        $scope.message = "User has been registered successfully, you will be redicted to login page in 2 seconds.";
                        // startTimer();
                        $location.path('/views/home');
                    },
                    function(response) {
                        var errors = [];
                        for (var key in response.data.ModelState) {
                            for (var i = 0; i < response.data.ModelState[key].length; i++) {
                                errors.push(response.data.ModelState[key][i]);
                            }
                        }
                        $scope.message = "Failed to register user due to:" + errors.join(' ');
                    });
                
            },
            function(response) {
                var errors = [];
                if (response.data.ModelState) {
                    for (var key in response.data.ModelState) {
                        for (var i = 0; i < response.data.ModelState[key].length; i++) {
                            errors.push(response.data.ModelState[key][i]);
                        }
                    }
                }
                else{
                    errors.push(response.data.Message);
                }

                $scope.message = "Failed to register user due to:" + errors.join(' ');
            });

    };

    // var startTimer = function() {
    //     var timer = $timeout(function() {
    //         $timeout.cancel(timer);
    //         $location.path('/login');
    //     }, 2000);
    // }

    $scope.exitApp = function() {

        var confirmPopup = $ionicPopup.confirm({
            title: 'Confirm exit application',
            template: 'Are you sure you want to exit?'
        });

        confirmPopup.then(function(res) {
            if (res) {
                console.log('You are sure');
                ionic.Platform.ready(function() {
                    // will execute when device is ready, or immediately if the device is already ready.
                });

                var deviceInformation = ionic.Platform.device();
                var isWebView = ionic.Platform.isWebView();
                var isIPad = ionic.Platform.isIPad();
                var isIOS = ionic.Platform.isIOS();
                var isAndroid = ionic.Platform.isAndroid();
                var isWindowsPhone = ionic.Platform.isWindowsPhone();
                var currentPlatform = ionic.Platform.platform();
                var currentPlatformVersion = ionic.Platform.version();

                ionic.Platform.exitApp(); // stops the app
            } else {
                console.log('You are not sure');
            }
        });
    }


}]);