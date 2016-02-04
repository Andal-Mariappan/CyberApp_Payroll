myApp.controller('leaveController', ['$scope', 'leaveService', '$cordovaCalendar', '$filter',

    function($scope, leaveService, $cordovaCalendar, $filter, $route) {

        $scope.startDate = new Date(), 'dd/MM/yyyy';
        $scope.endDate = new Date(), 'dd/MM/yyyy';
        $scope.diffDays = 1;

        $scope.data = {
            active: false
        }

        $scope.toggle = function() {
            $scope.data.active = !$scope.data.active;

        }

        $scope.dateLeave = function(startDate, endDate) {

            //var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

            $scope.diffDays = parseInt((endDate - startDate) / 86400000 + 1);

            if (endDate < startDate) {

                $scope.diffDays = "Please choose End Date";
            }

        }

        $scope.datas = function(startDate, endDate) {

            if ($scope.data.active) {
                $scope.diffDays = null;
                return true;
            } else {
                
                $scope.diffDays = parseInt((endDate - startDate) / 86400000 + 1);

                if (endDate < startDate) {

                    $scope.diffDays = "Please choose End Date";
                }
                return false;
            }

        }

        $scope.sendLeave = function(e, a) {

        }

        $scope.createLeavesData = [];
        $scope.updateLeavesData = [];
        $scope.approveLeavesData = [];
        $scope.rejectLeavesData = [];
        $scope.getLeavesData = [];
        $scope.deleteLeavesData = [];
        $scope.getLeaveDraftsData = [];
        $scope.createLeaveDraftsData = [];

        // leaveService.createLeaves().then(function(results) {

        //     $scope.createLeavesData = results.data;

        // }, function(error) {
        //     alert(error.data.message);
        // })

        // leaveService.updateLeavesData().then(function(results) {

        //     $scope.updateLeavesData = results.data;

        // }, function(error) {
        //     alert(error.data.message);
        // })

        // leaveService.approveLeavesData().then(function(results) {

        //     $scope.approveLeavesData = results.data;

        // }, function(error) {
        //     alert(error.data.message);
        // })

        // leaveService.rejectLeavesData().then(function(results) {

        //     $scope.rejectLeavesData = results.data;

        // }, function(error) {
        //     alert(error.data.message);
        // })

        // leaveService.getLeaves().then(function(results) {

        //     $scope.getLeavesData = results.data;


        // // }, function(error) {
        // //     alert(error.data.message);
        // })


        // leaveService.deleteLeavesData().then(function(results) {

        //     $scope.deleteLeavesData = results.data;

        // }, function(error) {
        //     alert(error.data.message);
        // })

        // leaveService.getLeaveDraftsData().then(function(results) {

        //     $scope.getLeaveDraftsData = results.data;

        // }, function(error) {
        //     alert(error.data.message);
        // })

        // leaveService.createLeaveDraftsData().then(function(results) {

        //     $scope.createLeaveDraftsData = results.data;

        // }, function(error) {
        //     alert(error.data.message);
        // })

    }
]);
