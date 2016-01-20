myApp.controller('homeController', ['$scope', 'employeeService', function($scope, employeeService) {

    $scope.employeeData = [];

    employeeService.getEmployeeByEmail().then(function(results) {

        $scope.employeeData = results.data;

    }, function(error) {
        alert(error.data.message);
    })
}]);
