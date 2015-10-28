(function() {
  'use strict';

  angular
    .module('racketdropApp')
    .controller('ReviewController', function(){
      this.review = {};
      this.addReview = function(item) {
        item.reviews.push(this.review);
      };
    });


})();
