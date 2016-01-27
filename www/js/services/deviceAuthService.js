'use strict';
myApp.factory('deviceAuthService', ['$http', 'ngAuthSettings', 'localStorageService', function($http, ngAuthSettings, localStorageService) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;

    var deviceAuthServiceFactory = {};

    var _getDeviceAuthService = function(deviceID,platforms) {
        // var authData = localStorageService.get('authorizationData');
        // if (authData) {

        // }
        // + authData.userName
        localStorageService.set('deviceData', { DeviceID : deviceID,Platforms : platforms});
        return $http.get(serviceBase + 'api/User/' + deviceID).then(function(results) {
            return results;
        });
    };

    var _createDeviceAuthService = function(data) {
        // var authData = localStorageService.get('authorizationData');
        // if (authData) {

        // }
        // + authData.userName
        

        return $http.post(serviceBase + 'api/User/', data).then(function(results) {
            return results;
        });
    };
    deviceAuthServiceFactory.getDeviceAuthService = _getDeviceAuthService;

    deviceAuthServiceFactory.createDeviceAuthService = _createDeviceAuthService;

    return deviceAuthServiceFactory;

}]);
