(function () {
  'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope'];
function CounterController($scope) {
  $scope.onceCounter = 0;
  $scope.Counter = 0;
  $scope.name = "Sindhu";

  $scope.showNumberOfWatchers = function () {
    console.log("# of Watchers: ", $scope.$$watchersCount);

  };

  $scope.countOnce = function () {
    $scope.onceCounter = 1;
  };

  $scope.upCounter = function () {
    $scope.Counter++;
  };

   $scope.$watch(function () {
    console.log("Digest Loop Fired!");
  })

  //$scope.$watch('onceCounter', function (newValue, oldValue) {
    //console.log("onceCounter old value: ", oldValue);
    //console.log("onceCounter new value: ", newValue);
  //});
  //$scope.$watch('onceCounter', function (newValue, oldValue) {
    //console.log("Counter old value: ", oldValue);
    //console.log("Counter new value: ", newValue);
//});
}
})();
