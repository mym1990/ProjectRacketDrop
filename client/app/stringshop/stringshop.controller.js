(function() {
  'use strict';

  angular
    .module('racketdropApp')
    .controller('ItemIndexController', ItemIndexController);

  /** @ngInject */
  function ItemIndexController(ItemService, $state, CartService) {
    var vm = this;

    vm.inventory = ItemService.inventory;

    vm.searchText = '';
    vm.cart = CartService.cart;

    vm.addItem = function(item) {
      CartService.addItem(item);
    };

    vm.removeItem = function(item) {
      CartService.removeItem(item);
    };

    vm.getCost = function(item) {
      return CartService.getCost(item);
    };

    vm.getTotal = function() {
      return CartService.getTotal();
    };

    vm.clearCart = function() {
      return CartService.clearCart();
    };

    vm.goItem = function (item) {
      $state.go( 'itemDetail', { itemId : item.id } );
    };
  }
})();
