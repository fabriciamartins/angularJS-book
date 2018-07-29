angular.module('notesApp', [])
    .controller('MainCtrl', [function(){
        var vm = this;
        vm.tab = 'first';
        vm.open = function(tab){
            vm.tab = tab;
        };
    }])

    .controller('SubCtrl', [function(){
        var vm = this;
        vm.list = [
            {id: 1, label: 'Item 0'},
            {id: 2, label: 'Item 1'}
        ];

        vm.add = function(){
            vm.list.push({
                id: vm.list.length + 1,
                label: 'Item ' + vm.list.length
            });
        };
    }]);