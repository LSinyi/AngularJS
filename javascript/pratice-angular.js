// ng-repeat
var FirendsCtrl = function($scope) {
    $scope.friends = [{
        name: '男丁格爾',
        age: 10
    }, {
        name: 'jelly',
        age: 11
    }, {
        name: '梅干桑',
        age: 12
    }, {
        name: '莫希爾',
        age: 13
    }, ];
};

//filter過濾器/篩選資料
var FilterCtrl = function($scope, $filter) {
    $scope.num = 1234.567891231231;
    console.log($filter('number')($scope.num, 5));
    $scope.money = 4321.123;
    $scope.birth = '1993-01-01';
    $scope.obj = {
        name: 'sinyi',
        age: 21,
        skills: ['jQuery', 'HTML']
    };
    $scope.lower = 'SINYI';
};
var TableFilterCtrl = function($scope, $filter) {
    $scope.friends = [{
        name: '男丁格爾',
        age: 18,
        skills: ['jQuery', 'JavaScript', 'Angular.js']
    }, {
        name: '布魯克',
        age: 90,
        skills: ['催眠曲·輪舞', '鼻唄三丁·矢筈斬', '冰凍劍', '哼歌·吹雪斬']
    }, {
        name: '梅干桑',
        age: 30,
        skills: ['Photoshop', 'Camera', 'Wordpress']
    }, {
        name: '漩渦鳴人',
        age: 17,
        skills: ['色誘術', '後宮術', '螺旋丸', '尾獸玉']
    }];

    $filter('filter')($scope.friends, $scope.search, true)
}

// ng-option
// 陣列型態
var SelectCtrl = function($scope) {
        $scope.one = ['A', 'B', 'C', 'D', 'E', 'F'];
    }
    // 物件型態
var SelectCtrl2 = function($scope) {
    $scope.two = [{
        name: '蒙其·D·魯夫',
        age: 19,
        skills: ['橡膠槍', '橡膠火箭砲', '換檔', '霸氣']
    }, {
        name: '梅干桑',
        age: 19,
        skills: ['Photoshop', 'Camera', 'Wordpress']
    }, {
        name: '布魯克',
        age: 90,
        skills: ['催眠曲·輪舞', '鼻唄三丁·矢筈斬', '冰凍劍', '哼歌·吹雪斬']
    }];
}

// ng-change
var SelectCtrl3 = function($scope) {
    $scope.three = {
        '船長': {
            name: '蒙其·D·魯夫',
            age: 19,
            skills: ['橡膠槍', '橡膠火箭砲', '換檔', '霸氣']
        },
        '音樂家': {
            name: '布魯克',
            age: 90,
            skills: ['催眠曲·輪舞', '鼻唄三丁·矢筈斬', '冰凍劍', '哼歌·吹雪斬']
        }
    };

    $scope.result = "";
    $scope.changeCount = 0;
    $scope.change = function() {
        console.log($scope.changeCount);
        $scope.changeCount++;
        $scope.result = $scope.role3 + ' 變更了' + $scope.changeCount + '次';
    }
}

//模組Module使用,前需改ng-app="CalApp"
var calApp = angular.module('CalApp', []); //angular.module(name, requires) 建立module
calApp.controller('CalCtrl', function($scope) { //.controller(name, constructor) 來新增 Controller
    $scope.num1 = 0;
    $scope.num2 = 5;
});

//依賴注入(Dependency Injection)目的壓縮程式
var injectCtrl = function(a) { //$scope換成另一個參數
    a.name = "Liao";
};
injectCtrl.$inject = ['$scope']; //依賴注入(Dependency Injection)等同傳$scope


//直接將 ng-if 的值指定為 Model 之外，也能依某個函式的回傳結果來判斷
var IfCtrl = function($scope) {
    $scope.show = function() {
        return $scope.checked;
    }
}
