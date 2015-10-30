(function() {
  'use strict';

  angular
    .module('racketdropApp')
    .controller('StringShowController', function(ItemService, $stateParams){

      var vm = this;
      var id = $stateParams.itemId;
      vm.item = ItemService.findItemById(id);
      vm.review = {};
      vm.addReview = function(item) {
        console.log(item);
        item.reviews.push(vm.review);
        vm.review = {};
      };
    });

      /** @ngInject */
      // function ItemShowController(ItemService, $stateParams) {
})();
