function ItemService(opt_items){
    var items = opt_items || [];

    this.list = function(){
        return items;
    };

    this.add = function(item){
        items.push(item);
    };
}

angular.module('notesApp', [])
    .provider('ItemService', function(){
        var haveDefaultItems = true;

        this.disableDefaultItems = function(){
            haveDefaultItems = false;
        };

        //Esta função obtém nossas dependências, e não o provedor anterior
        this.$get = [function(){
            var optItems = [];
            if(haveDefaultItems){
                optItems = [
                    {id: 1, label: 'Item 0'},
                    {id: 2, label: 'Item 1'}
                ];
            }
            return new ItemService(optItems);
        }];
    })
    .config(['ItemServiceProvider', function(ItemServiceProvider){
        //Para ver como o provedor pode alterar a configuração, altere o valor der
        //shouldHaveDefaults para true e tente executar o exemplo
        var shouldHaveDefaults = false;

        //Obtém a configuração do servidor
        //Define shouldHaveDefaults de alguma maneira
        //Suponha que ele mude de modo mágico, por enquanto
        if(!shouldHaveDefaults){
            ItemServiceProvider.disableDefaultItems();
        }
    }])
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
    }]);