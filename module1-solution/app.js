(function(){
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController',function($scope){
    $scope.lunchItems="";
    $scope.lunchMessage="";

    $scope.displayMessage = function(){
      var str = $scope.lunchItems;
      var items = str.split(",");
      var count = items.length;

      if(str.length === 0)
      {
        $scope.lunchMessage = "Please enter data first";
      }
      else if(count <= 3)
      {
        $scope.lunchMessage = "Enjoy!";
      }
      else {
        $scope.lunchMessage = "Too much!";
      }
    };
  });

  }
)();
