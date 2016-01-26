myApp.controller('homeController', ['$scope', 'employeeService', '$interval', '$filter', '$ionicSideMenuDelegate', '$ionicPopup', '$cordovaGeolocation', '$ionicLoading', '$location', function($scope, employeeService, $interval, $filter, $ionicSideMenuDelegate, $ionicPopup, $cordovaGeolocation, $ionicLoading, $location) {

    
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
        $scope.checkIn = function() {
            var posOptions = {
                timeout: 10000,
                enableHighAccuracy: true
            };


            $ionicLoading.show();

            $cordovaGeolocation
                .getCurrentPosition(posOptions)
                .then(function(position) {

                    $ionicLoading.hide();

                    var lat = position.coords.latitude;
                    var lng = position.coords.longitude;

                    alert("Got position: " + lat + ", " + lng);

                    $location.path('views/employeeDetail');

                }, function(err) {


                    if (error.code == PositionError.PERMISSION_DENIED) {
                        alert("Permission denied. check setting");
                    } else if (error.code == PositionError.POSITION_UNAVAILABLE) {
                        alert("Cannot get position. May be problem with network or can't get a satellite fix.");
                    } else if (error.code == PositionError.TIMEOUT) {
                        alert("Geolocation is timed out.");
                    } else {
                        alert(error.message);
                    }
                });
        }


    }])

    // Register the 'myCurrentTime' directive factory method.
    // We inject $interval and dateFilter service since the factory method is DI.
    .directive('myCurrentTime', ['$interval', 'dateFilter',
        function($interval, dateFilter) {
            // return the directive link function. (compile function not needed)
            return function(scope, element, attrs) {
                var format; // date format

                // used to update the UI
                function updateTime() {
                    element.text(dateFilter(new Date(), format));
                }

                // watch the expression, and update the UI on change.
                scope.$watch(attrs.myCurrentTime, function() {
                    format = 'hh:mm a';
                    updateTime();
                });
                stopTime = $interval(updateTime, 1000);

                // listen on DOM destroy (removal) event, and cancel the next UI update
                // to prevent updating time after the DOM element was removed.
                element.on('$destroy', function() {
                    $interval.cancel(stopTime);
                });
            }

        }
    ])
    .directive('myCurrentTime2', ['$interval', 'dateFilter',
        function($interval, dateFilter) {
            // return the directive link function. (compile function not needed)
            return function(scope, element, attrs) {
                var format2; // date format

                // used to update the UI
                function updateTime() {
                    element.text(dateFilter(new Date(), format2));
                }

                // watch the expression, and update the UI on change.
                scope.$watch(attrs.myCurrentTime, function() {
                    format2 = ' dd MMMM yyyy';
                    updateTime();
                });
                stopTime = $interval(updateTime, 1000);

                // listen on DOM destroy (removal) event, and cancel the next UI update
                // to prevent updating time after the DOM element was removed.
                element.on('$destroy', function() {
                    $interval.cancel(stopTime);
                });
            }

        }
    ]);
