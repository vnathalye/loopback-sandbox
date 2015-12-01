'use strict'

angular.module('projects', ['ngCookies', 'ngSanitize', 'ngResource', 'ui.router'
    , 'projects.controllers', 'projects.services'
]);

angular.module('projects').config(['$httpProvider',function($httpProvider){
    $httpProvider.defaults.withCredentials = true;

}]);

angular.module('projects').run(['$state',function($state){

    $state.go('ViewAllProjects');

}]);
