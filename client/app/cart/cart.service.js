(function() {
  'use strict';

  angular.module('racketdropApp')
  .service('CartService', function() {

    var that = this;

    that.cart = [];

    function findItemById(items, id) {
      return _.find(items, function(item) {
        return item.id === id;
      });
    }

    that.addItem = function(item) {
      var found = findItemById(that.cart, item.id);
      if (found) {
        found.qty += item.qty;
      }
      else {
        that.cart.push(angular.copy(item));
      }
    };

    that.removeItem = function(item) {
      var index = that.cart.indexOf(item);
      that.cart.splice(index, 1);
    };

    that.getCost = function(item) {
      return item.qty * item.price;
    };

    that.getTotal = function() {
      return _.reduce(that.cart, function(sum, item) {
        return sum + that.getCost(item);
      }, 0);
    };

    that.clearCart = function() {
      that.cart.length = 0;
    };
  });
})();
