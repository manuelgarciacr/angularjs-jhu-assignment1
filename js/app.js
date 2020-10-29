(function () {
    'use strict';

    angular.module('LunchCheckApp', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.lunchMenu = "";
        $scope.message = "";
        $scope.color = "";

        $scope.sayMessage = function () {
            return "Yaakov likes to eat healthy snacks at night!";
        };

        $scope.checkTooMuch = function () {
            var lunchMenu = $scope.lunchMenu.split(',');
            var items = [];

            for (let i = 0; i < lunchMenu.length; i++){
                let item = lunchMenu[i].trim();
                if (item.length > 0)
                    items.push(item);
            }
            // Added space for force refresh screen. If your input is e.g. 
            // "    a, b", angular don't trim the data.
            $scope.lunchMenu = items.join(', ') + ' ';
            $scope.color = "green";
            if (items.length === 0 ) {
                $scope.color = "red";
                $scope.message = "Please enter data first"
            } else if (items.length <= 3)
                $scope.message = "Enjoy!";
            else
                $scope.message = "Too much!";  
        };
    }

})();
