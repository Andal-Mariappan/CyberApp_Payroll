'use strict';
myApp.factory('checkInService', ['$http', 'ngAuthSettings', 'localStorageService', function($http, ngAuthSettings, localStorageService) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;

    var checkInServiceFactory = {};

    var _checkIn = function(data) {
        // var authData = localStorageService.get('authorizationData');
        // if (authData) {

        // }
        // + authData.userName
        var deviceData = localStorageService.get('deviceData');
        data.Email = deviceData.Email;

        return $http.post(serviceBase + 'api/CheckIn/', data).then(function(results) {
            return results;
        });
    };

    checkInServiceFactory.checkIn = _checkIn;

    return checkInServiceFactory;

}]);
