
var my_first_module = angular.module('my_first_module',[]);

my_first_module.controller('MsgController',function ($scope) {
    $scope.Message = "測試controller值是否傳到view";
});

