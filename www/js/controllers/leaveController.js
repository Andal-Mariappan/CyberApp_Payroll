myApp.controller('leaveController', ['$scope', 'leaveService', function($scope, leaveService) {

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
