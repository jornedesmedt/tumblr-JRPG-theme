angular.module('app', [])
        .controller('MainCtrl', ['$scope', function($scope)
        {
                $scope.showItemMenu = false;
                $scope.toggleItemMenu = function(){
                  $scope.showItemMenu = !$scope.showItemMenu;  
                };
                
                $scope.clickNowhere = function(){
                  $scope.showItemMenu = false;
                };
                
        }]);