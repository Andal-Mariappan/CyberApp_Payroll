myApp.controller('employeeController', ['$scope', function($scope) {

    // $scope.tabname = "1";
    //         $scope.selectTab = function(tab) {
    //             $scope.tabname = tab;
    //         };
    $scope.var = 1;
$scope.click = function(num) {
    $scope.var = num;
}


}]);
