// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var myApp = angular.module('starter', ['ionic', 'LocalStorageModule','tc.chartjs'])


.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

myApp.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('logIn', {
            url: '/views/logIn',
            templateUrl: 'views/logIn.html',
            controller: 'loginController'
        })
        .state('home', {
            url: '/views/home',
            templateUrl: 'views/home.html',
            controller: 'employeeController'
        })
        .state('employeeDetail', {
            url: '/views/employeeDetail',
            templateUrl: 'views/employeeDetail.html',
            controller: 'employeeController'
        })
        .state('leave', {
            url: '/views/leave',
            templateUrl: 'views/leave.html',
            controller: 'leaveController'
        })
        .state('leaveList', {
            url: '/views/leaveList',
            templateUrl: 'views/leaveList.html',
            controller: 'leaveListController'
        })
        .state('leaveDraft', {
            url: '/views/leaveDraft',
            templateUrl: 'views/leaveDraft.html',
            
        })
        .state('register', {
            url: '/views/register',
            templateUrl: 'views/register.html',
            controller: 'registerController'
        })
        



    $urlRouterProvider.otherwise('/views/logIn');

});
var serviceBase = 'http://cyberweb.azurewebsites.net/';
myApp.constant('ngAuthSettings', {
    apiServiceBaseUri: serviceBase,
    clientId: 'ngAuthApp'
});
myApp.config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
});
myApp.run(['authService', function (authService) {
    authService.fillAuthData();
}]);