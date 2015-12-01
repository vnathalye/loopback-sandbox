'use strict'

angular.module('projects.controllers', []).config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('ViewAllProjects', {
        url: '/projects/viewAll',
        controller: 'ProjectListController',
        templateUrl: 'views/all-projects.html'
    }).state('projectView', {
        url: '/projects/:id/view',
        controller: 'ProjectViewController',
        templateUrl: 'views/project-view.html'
    });
}])
.controller('ProjectListController', ['$scope', '$rootScope', 'Project', '$state', function ($scope, $rootScope, Project, $state) {

    $scope.projects = Project.query();

}])
.controller('ProjectViewController', ['$scope', '$rootScope', 'Project', 'Task', '$stateParams', '$state', function ($scope, $rootScope, Project, Task, $stateParams, $state) {

    $scope.project = Project.findOne({
        filter: {
            where: { id: $stateParams.id },
            include: [
              'tasks'
            ]
        }
    });

}])
;
