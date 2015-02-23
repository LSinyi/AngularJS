var userInfoModule = angular.module('UserInfoModule', []);
userInfoModule.controller('UserInfoCtrl', ['$scope', function($scope) {
    $scope.userInfo = {
        email: '1234567@gmail.com',
        password: "1234567",
        autoLogin: true
    };
    $scope.getFormData = function() {
        console.log($scope.userInfo);
    };
    $scope.setFormData = function() {
        $scope.userInfo = {
            email: '76654321@gmail.com',
            password: "76654321",
            autoLogin: false
        }
    };
    $scope.resetForm = function() {
        $scope.userInfo = {
            email: '1234567@gmail.com',
            password: "1234567",
            autoLogin: true
        }
    };
}])
