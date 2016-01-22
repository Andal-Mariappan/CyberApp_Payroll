'use strict';
myApp.factory('leaveService', ['$http', 'ngAuthSettings', 'localStorageService', function($http, ngAuthSettings, localStorageService) {
    var serviceBase = ngAuthSettings.apiServiceBaseUri;
    var leaveServiceFactory = {};



    var _createLeaves = function() {
        var authData = localStorageService.get('authorizationData');
        if (authData) {
            return $http.post(serviceBase + 'api/Leave=').then(function(results) {
                return results;
            });
        }
    };

    var _updateLeaves = function() {
        var authData = localStorageService.get('authorizationData');
        if (authData) {
            return $http.put(serviceBase + 'api/Leave/', {id:id} + authData.ID).then(function(results) {
                return results;
            });
        }
    };

    var _approveLeaves = function() {
        var authData = localStorageService.get('authorizationData');
        if (authData) {
            return $http.put(serviceBase + 'api/Leave/', {id:id} + authData.ID).then(function(results) {
                return results;
            });
        }
    };

    var _rejectLeaves = function() {
        var authData = localStorageService.get('authorizationData');
        if (authData) {
            return $http.put(serviceBase + 'api/Leave/', {id:id} + authData.ID).then(function(results) {
                return results;
            });
        }
    };

    var _getLeaves = function() {
        var authData = localStorageService.get('authorizationData');
        if (authData) {
            return $http.get(serviceBase + 'api/Leave=').then(function(results) {
                return results;
            });
        }
    };

    var _deleteLeaves = function() {
        // $window.localStorage.removeItem();
        var authData = localStorageService.get('authorizationData');
        if (authData) {
            return $http.delete(serviceBase + 'api/Leave=' + authData.ID).then(function(results) {
                return results;
            });
        }
    };

    var _getLeaveDrafts = function() {
        var authData = localStorageService.get('authorizationData');
        if (authData) {
            return $http.get(serviceBase + 'api/Leave?Email=' + authData.userName).then(function(results) {
                return results;
            });
        }
    };

    var _createLeaveDrafts = function() {
        var authData = localStorageService.get('authorizationData');
        if (authData) {
            return $http.post(serviceBase + 'api/Leave=' + authData.ID).then(function(results) {
                return results;
            });
        }
    };

    leaveServiceFactory.createLeaves = _createLeaves;
    leaveServiceFactory.updateLeaves = _updateLeaves;
    leaveServiceFactory.approveLeaves = _approveLeaves;
    leaveServiceFactory.rejectLeaves = _rejectLeaves;
    leaveServiceFactory.getLeaves = _getLeaves;
    leaveServiceFactory.deleteLeaves = _deleteLeaves;
    leaveServiceFactory.getLeaveDrafts = _getLeaveDrafts;
    leaveServiceFactory.createLeaveDrafts = _createLeaveDrafts;
    return leaveServiceFactory;




}]);
