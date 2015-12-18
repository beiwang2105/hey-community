angular.module('starter.controller.timeline', [])

.controller('TimelineCtrl', function($scope, $http) {
    $http.get('http://hey-bg.dev4living.com/timeline').then(function(response) {
        $scope.timelines = response.data;
    });
})
