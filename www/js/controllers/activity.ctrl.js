angular.module('starter.controller.activity', [])

.controller('ActivityCtrl', function($scope, $http) {
    $http.get('http://hey-bg.dev4living.com/activity').then(function(response) {
        $scope.activities = response.data;
    });
})
