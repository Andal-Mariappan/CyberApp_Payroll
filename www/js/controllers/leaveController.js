myApp.controller('leaveController', ['$scope', 'leaveService', '$cordovaCalendar', '$filter', function($scope, leaveService, $cordovaCalendar, $filter) {

    $scope.data = {
        active: false
    }
    $scope.toggle = function() {
        $scope.data.active = !$scope.data.active;
    }
    
    $scope.send = function(startDate, endDate) {
        resDate = endDate - startDate;
        resDate = $filter('date')(new Date(), 'd');
    }
    $scope.test = function(toDate, fromDate) {

        $scope.dayDifference = parseInt(Math.round((fromDate - toDate) / (1000 * 60 * 60 * 24)));;
    }


    // $scope.dateDiff = function() {

    //     var dayNumber = (1000 * 60 * 60 * 24);

    //     return function(toDate, fromDate) {
    //         if (toDate && fromDate) {
    //             var dayDiff = Math.floor((toDate - fromDate) / dayNumber);
    //             if (angular.isNumber(dayDiff)) {
    //                 $scope.dayDiff =  $scope.dayDiff + 1;
    //             }
    //         }
    //     };
    // };


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

}]);
