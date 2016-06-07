angular.module('directiveDay')
	.directive('navBar', function () {
		
		return {
			templateUrl: 'navBar.html',
			restrict: 'EA',
			scope: {
				user: '='
			}
		}






// end of navBar
	});