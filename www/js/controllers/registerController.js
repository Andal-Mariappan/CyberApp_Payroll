'use strict';
myApp.controller('registerController', ['$scope', '$location', '$timeout', 'authService', 'deviceAuthService', function($scope, $location, $timeout, authService, deviceAuthService) {

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
                        startTimer();
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
                alert("Success");
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

    };

    var startTimer = function() {
        var timer = $timeout(function() {
            $timeout.cancel(timer);
            $location.path('/login');
        }, 2000);
    }

}]);
