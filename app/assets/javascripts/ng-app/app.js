angular
    .module('AngularRails', [
        'ngRoute',
        'templates'
    ]).config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home.html',
                controller: 'HomeCtrl'
            });
        $locationProvider.html5Mode(true);
    });

/*
  angular.module('ListTest', ['ngMaterial'])
  .controller('AppCtrl', function($scope) {
      $scope.todos = [
        {
          face : 'https://placekitten.com/g/200/300',
          what: 'Brunch this weekend?',
          who: 'Min Li Chan',
          when: '3:08PM',
          notes: " I'll be in your neighborhood doing errands"
        },
        {
          face : 'https://placekitten.com/g/200/300',
          what: 'Brunch this weekend?',
          who: 'Min Li Chan',
          when: '3:08PM',
          notes: " I'll be in your neighborhood doing errands"
        },
        {
          face : 'https://placekitten.com/g/200/300',
          what: 'Brunch this weekend?',
          who: 'Min Li Chan',
          when: '3:08PM',
          notes: " I'll be in your neighborhood doing errands"
        },
        {
          face : 'https://placekitten.com/g/200/300',
          what: 'Brunch this weekend?',
          who: 'Min Li Chan',
          when: '3:08PM',
          notes: " I'll be in your neighborhood doing errands"
        },
        {
          face : 'https://placekitten.com/g/200/300',
          what: 'Brunch this weekend?',
          who: 'Min Li Chan',
          when: '3:08PM',
          notes: " I'll be in your neighborhood doing errands"
        },
      ];
  });
*/
