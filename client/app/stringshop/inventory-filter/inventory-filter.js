(function() {
  'use strict';

  angular.module('racketdropApp').
  filter('inventory', function() {

    function isMatch(str, pattern) {
      if (pattern) {
        return str.toLowerCase().indexOf(pattern.toLowerCase()) !== -1;
      }
      else {
        return true;
      }
    }

    return function(inventory, searchText) {
      var items = {
          searchText: searchText,
          out: []
      };
      angular.forEach(inventory, function (item) {
        if (isMatch(item.category   , this.searchText) ||
            isMatch(item.name       , this.searchText) ||
            isMatch(item.description, this.searchText) ) {
          this.out.push(item);
        }
      }, items);
      return items.out;
    };
  });
})();
