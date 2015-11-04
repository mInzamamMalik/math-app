/**
 * Created by malikasinger on 11/4/2015.
 */
angular.module("starter")

  .controller("tableController",function($scope){

    $scope.tableOf = 2;
    $scope.count = 10;

    $scope.table = [];

    $scope.displayTable = function(){

      for(var i=1; i<$scope.count ; i++){
        $scope.table[i] = i;

      }

    }

  });
