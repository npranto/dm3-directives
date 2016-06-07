angular.module('directiveDay')
	.directive('nameDir', function () {
		return {
			templateUrl: './nameDirective/nameDir.html',
			scope: {
				userName: '=',
				today: '@',
			},
			link: function($scope, element, attributes){
				console.log($scope);
				console.log(element);
				console.log(attributes);
			}
			controller: function($scope){
				$scope.showName = function(name){
					alert(name);
				}
			}
		}
	})