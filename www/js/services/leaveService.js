'use strict';
myApp.factory('employeeService', ['$http', 'ngAuthSettings', 'localStorageService', function($http, ngAuthSettings, localStorageService) {
    var serviceBase = ngAuthSettings.apiServiceBaseUri;
    var leaveServiceFactory = {};

    var _createLeaves = function(){

    };

    var _updateLeaves = function(){

    };

    var _approveLeaves = function(){

    };

    var _rejectLeaves = function(){

    };

    var _getLeaves = function(){

    };

    var _deleteLeaves = function(){

    };

    var _getLeaveDrafts = function() {
        var authData = localStorageService.get('authorizationData');
        if (authData) {
            return $http.get(serviceBase + 'api/Leave?Email=' + authData.userName).then(function(results) {
                return results;
            });
        }
    };

    leaveServiceFactory.getLeaveDrafts = _getLeaveDrafts;
    return leaveServiceFactory;

    var _createLeaveDrafts = function(){

    };

}]);