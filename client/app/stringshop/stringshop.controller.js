(function() {
  'use strict';

  angular
    .module('racketdropApp')
    .controller('ItemIndexController', ItemIndexController);

  /** @ngInject */
  function ItemIndexController(ItemService, $state) {
    var vm = this;

    vm.inventory = ItemService.inventory;

    vm.goItem = function (item) {
      $state.go( 'itemDetail', { itemId : item.id } );
    };
  }
})();
