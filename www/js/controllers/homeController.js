myApp.controller('homeController', ['$scope', 'employeeService', '$interval', '$filter', '$ionicSideMenuDelegate', '$ionicPopup', function($scope, employeeService, $interval, $filter, $ionicSideMenuDelegate, $ionicPopup) {

        $scope.employeeData = [];

        employeeService.getEmployeeByEmail().then(function(results) {

            $scope.employeeData = results.data;

        }, function(error) {
            alert(error.data.message);
        })

        $scope.exitApp = function() {

            var confirmPopup = $ionicPopup.confirm({
                title: 'Confirm exit application',
                template: 'Are you sure you want to exit?'
            });

            confirmPopup.then(function(res) {
                if (res) {
                    console.log('You are sure');
                } else {
                    console.log('You are not sure');
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
