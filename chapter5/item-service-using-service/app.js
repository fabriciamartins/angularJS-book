angular.module('notesApp', [])
    .controller('MainCtrl', [function(){
        var vm = this;
        vm.tab = 'first';
        vm.open = function(tab){
            vm.tab = tab;
        };
    }])

    .controller('SubCtrl', ['ItemService', function(ItemService){
        var vm = this;
        vm.list = function(){
            return ItemService.list();
        }

        vm.add = function(){
            ItemService.add({
                id: vm.list.length + 1,
                label: 'Item ' + vm.list.length
            });
        };
    }])

    .service('ItemService', [function(){
        var items = [
            {id: 1, label: 'Item 0'},
            {id: 2, label: 'Item 1'}
        ];
        
        this.list = function(){
            return items;
        };

        this.add = function(item){
            items.push(item);
        };
    }]);