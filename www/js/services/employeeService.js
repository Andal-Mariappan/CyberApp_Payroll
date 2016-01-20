'use strict';
myApp.factory('employeeService', ['$http', 'ngAuthSettings', 'localStorageService', function($http, ngAuthSettings, localStorageService) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;

    var employeeServiceFactory = {};

    var _getEmployeeByEmail = function() {
        var authData = localStorageService.get('authorizationData');
        if (authData) {
            return $http.get(serviceBase + 'api/Employee?Email=' + authData.userName).then(function(results) {
                return results;
            });
        }


    };

    employeeServiceFactory.getEmployeeByEmail = _getEmployeeByEmail;

    return employeeServiceFactory;

}]);
