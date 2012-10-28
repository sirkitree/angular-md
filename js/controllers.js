'use strict';

/* Controllers */


function MyCtrl1($scope) {
  $scope.markdown = "# test";
}
MyCtrl1.$inject = [$scope];

function MyCtrl2($scope) {}
// MyCtrl2.$inject = [];