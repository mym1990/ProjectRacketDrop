(function() {
  'use strict';

  angular
    .module('racketdropApp')
    .service('ItemService', ItemService);

  /** @ngInject */
  function ItemService() {

    var that = this;

    that.findItemById = function(id) {
      var itemId = parseInt(id);
      return _.find(that.inventory, function(item) {
        return item.id === itemId;
      });
    };
    that.services = [
      {
        name: "24-hour delivery",
        price: 32
      },
      {
        name: "48-hour delivery",
        price: 22
      },
      {
        name: "Regular drop-off",
        price: 12
      }
      ];
    // TODO: eventually we want to fetch the inventory from the server.
    that.inventory = [
      {
        id: 1,
        category: 'Polyester',
        name: 'Pro\'s Pro Black Out',
        price: 8,
        qty: 1,
        rating: 3.8,
        description: 'Innovative high-tech co-polyester string with pentagonal cross section. This unique profile provides extra spin and crucial control. This string does not slip, retains tension and provides top-notch performance. Extremely durable. Designed and made in Germany for demanding tournament players.  Compare to Tecnifibre Black Code, WeissCANNON Black5Edge.',
        imageFile: 'prosproblackout.jpg',
        reviews: [
        {
          stars: 5,
          body: 'I love this product!',
          author: 'stas@example.com'
        },
        {
          stars: 4,
          body: 'This is a horrible product!',
          author: 'bob@example.com'
        }
        ]
      },
      {
        id: 2,
        category: 'Polyester',
        name: 'Pro\'s Pro Devil Spin',
        price: 8,
        qty: 1,
        rating: 4.4,
        description: 'This latest shaped co-polyester string has been created for the modern aggressive player who demands the most extreme spin and control.  In a patented method, Devil Spin features a twist that is about 250% tighter and more pronounced than conventional twisted strings  The rough texture increases ball bite while being very comfortable and playable.',
        imageFile: 'prosprodevilspin.jpg',
        reviews: []
      },
      {
        id: 3,
        category: 'Polyester',
        name: 'Pro\'s Pro Vendetta',
        price: 6,
        qty: 1,
        rating: 3.5,
        description: 'Top quality made in Japan, this super-soft co-polyester string is specially designed for demanding tournament players. It is best suited for hard hitters requiring extreme durability, power, comfort, and no loss of tension. With it\'s special components, it is considerably more arm-friendly than traditional poly strings.  Compare to Kirschbaum Pro Line II.',
        imageFile: 'prosprovendetta.jpg',
        reviews: []
      },
      {
        id: 4,
        category: 'Multifilament',
        name: 'Pro\'s Pro A-Multi',
        price: 12,
        qty: 1,
        rating: 4.7,
        description: 'A new multifilament string with a radiant look.  The center core is made of high tensile multifilaments which are wrapped with a layer of shock-absorbing braided filaments. A layer of monofilaments are then twisted around that, offering ultimate comfort and feel.',
        imageFile: 'prosproamulti.jpg',
        reviews: []
      },
      {
        id: 5,
        category: 'Synthetic',
        name: 'Pro\'s Pro Colorline',
        price:   10,
        qty: 1,
        rating: 4.0,
        description: 'A best-seller, this time-tested all-round string provides excellent playing characteristics and has now been further improved with the latest materials. For players who prefer both long-lasting tension and good ball control.  Compare to Gosen OG-Sheep Micro JC (Jim Courier).',
        imageFile: 'prosprocolorline.jpg',
        reviews: []
      },
      {
        id: 6,
        category: 'Multifilament',
        name: 'Wilson NXT',
        price:  15,
        qty: 3,
        rating: 4.3,
        description: 'This is one of the most popular, time-tested multifilaments ever made. It offers optimal comfort, touch, power, and feel. According to Wilson, NXT offers a 10% increased sweet spot over traditional synthetic gut, as well as 74% less vibration. Players with slow to moderate swing speeds will benefit from the power of NXT. It\'s also great for all types of players that love the classic gut-like feel of a multifilament, as well as being a great option for polyester string users as part of a hybrid.',
        imageFile: 'wilsonnxt.jpg',
        reviews: []
      },
      {
        id: 7,
        category: 'Polyester',
        name: 'Solinco Tour Bite',
        price: 11,
        qty: 1,
        rating: 4,
        description: 'Solinco Tour Bite is a polyester monofilament that provides excellent control and remarkable spin. This explains why it is extremely popular at the collegiate level. Our testers noticed immediately how well the square profile gripped the ball. This is not only a perfect string for players seeking more control and spin, but it also packs a punch for those who favor a heavy ball.',
        imageFile: 'solincotourbite.jpg',
        reviews: []
      },
      {
        id: 8,
        category: 'Co-polyester',
        name: 'Luxilon 4G',
        price: 18,
        qty: 1,
        rating: 4.3,
        description: 'Though quite firm and durable, Luxilon 4G is loaded with playability. Our testers found this one to have higher than average comfort for a monofilament string, making it more than just a niche string for string breakers. Luxilon spent two years tweaking the molecular properties of 4G in order to extend the life of playability. This is a great option for players who want all the benefits of a control string without the high tension loss and impact shock that comes with some of the first generation polys. This doesn\'t mean it will work for players who prefer natural gut or nylon multifilaments, but it does mean that for players with long, fast strokes, Luxilon has created a very user-friendly co-poly.',
        imageFile: 'luxilon4g.jpg',
        reviews: []
      },
      {
        id: 9,
        category: 'Co-polyester',
        name: 'Luxilon ALU Power',
        price:  18,
        qty: 1,
        rating: 3.5,
        description: 'Combines great durability with impressive power and good control. One of the most popular strings on the ATP and WTA tours. The durable and control oriented response of Luxilon ALU-Power and other Luxilon co-polyester strings has revolutionized professional tennis. By far the most popular choice on the ATP Tour, Luxilon\'s co-polyester monofilament construction allows a player to take full cuts at the ball without any loss of control. Players with fast swing speeds also tend to find these strings very spin friendly.',
        imageFile: 'ALUpowersilver.jpg',
        reviews: []
      },
      {
        id: 10,
        category: 'Multifilament',
        name: 'Tecnifibre X-One Biphase',
        price:  19,
        qty: 1,
        rating: 4.7,
        description: 'A premium multifilament string, X-One BiPhase delivers superb comfort, feel and a crisp response. A good choice for players seeking an arm-friendly string without sacrificing power. Provides good tension maintenance too.According to Tecnifibre, the X-One Biphase string uses High Heat Capacity (H2C) fibers, which allows the use of an innovative chemical treatment process called Trimerization. This new process increases the cohesion between chemical molecule links through extreme variations in temperature to result in ultimate dynamic efficiency (power) and exceptional feel. The new patented Biphasic process, with its visible marks on the string, extends string life by 20% and offers increased spin. Similar to its leading string, NRG2, the multifilament fibers within this string are immersed in polyurethane to provide shock absorption and optimum comfort.',
        imageFile: 'x1biphase.jpg',
        reviews: []
      }
    ];
  }
})();
