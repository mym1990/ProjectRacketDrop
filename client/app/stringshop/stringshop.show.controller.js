(function() {
  'use strict';

  angular
    .module('racketdropApp')
    .controller('StringShowController', ItemShowController);

  /** @ngInject */
  function ItemShowController(ItemService, $stateParams) {
    var vm = this;
    var id = $stateParams.itemId;
    vm.item = ItemService.findItemById(id);
  }
})();
