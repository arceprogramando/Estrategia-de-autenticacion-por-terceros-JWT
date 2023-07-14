// Uso de mockaro para generar data random
const productData = [{
  title: 'Shrew, mandras tree', description: 'New Arrival', code: 'pvi813', price: 82289.19, status: 'false', category: 'invertebrates', thumbnails: '/upload/electricidad1.jpg',
},
{
  title: "Hoffman's sloth", description: 'Premium Quality', code: 'zhg119', price: 93447.78, status: 'true', category: 'reptiles', thumbnails: '/upload/electricidad1.jpg',
},
{
  title: 'Wolf spider', description: 'Best Seller', code: 'mtn548', price: 14843.66, status: 'true', category: 'amphibians', thumbnails: '/upload/electricidad1.jpg',
},
{
  title: 'African lynx', description: 'Premium Quality', code: 'zgu979', price: 99641.0, status: 'false', category: 'fish', thumbnails: '/upload/electricidad1.jpg',
},
{
  title: "Smith's bush squirrel", description: 'Discounted Price', code: 'tit917', price: 51946.32, status: 'true', category: 'birds', thumbnails: '/upload/suricata.jpg',
},
{
  title: 'Bushpig', description: 'Premium Quality', code: 'mrc958', price: 21372.85, status: 'false', category: 'amphibians', thumbnails: '/upload/gatito.jpg',
},
{
  title: 'Tortoise, burmese black mountain', description: 'New Arrival', code: 'zvs597', price: 34315.25, status: 'false', category: 'reptiles', thumbnails: '/upload/electricidad1.jpg',
},
{
  title: 'Red-billed buffalo weaver', description: 'New Arrival', code: 'tgm750', price: 2555.05, status: 'false', category: 'invertebrates', thumbnails: '/upload/suricata.jpg',
},
{
  title: 'Lizard, mexican beaded', description: 'Premium Quality', code: 'leq821', price: 39269.28, status: 'false', category: 'reptiles', thumbnails: '/upload/electricidad1.jpg',
},
{
  title: 'Mockingbird, galapagos', description: 'Limited Edition', code: 'xvn009', price: 26404.76, status: 'true', category: 'mammals', thumbnails: '/upload/gatito.jpg',
},
{
  title: 'Impala', description: 'Best Seller', code: 'tqh447', price: 94063.83, status: 'true', category: 'amphibians', thumbnails: '/upload/electricidad1.jpg',
},
{
  title: 'Macaw, blue and gold', description: 'Premium Quality', code: 'uda308', price: 88675.3, status: 'false', category: 'invertebrates', thumbnails: '/upload/gatito.jpg',
},
{
  title: 'Pelican, great white', description: 'Best Seller', code: 'yet479', price: 37556.47, status: 'true', category: 'invertebrates', thumbnails: '/upload/suricata.jpg',
},
{
  title: 'Common ringtail', description: 'New Arrival', code: 'wxa588', price: 71004.04, status: 'false', category: 'invertebrates', thumbnails: '/upload/gatito.jpg',
},
{
  title: 'Racer, american', description: 'Best Seller', code: 'zaq961', price: 18135.9, status: 'true', category: 'fish', thumbnails: '/upload/suricata.jpg',
},
{
  title: 'Yellow mongoose', description: 'Limited Edition', code: 'jdt196', price: 59909.22, status: 'true', category: 'birds', thumbnails: '/upload/electricidad1.jpg',
},
{
  title: 'Black and white colobus', description: 'Limited Edition', code: 'azk053', price: 64358.59, status: 'true', category: 'reptiles', thumbnails: '/upload/suricata.jpg',
},
{
  title: 'Alpaca', description: 'New Arrival', code: 'fui509', price: 87600.85, status: 'false', category: 'reptiles', thumbnails: '/upload/electricidad1.jpg',
},
{
  title: 'Sarus crane', description: 'Discounted Price', code: 'dqw519', price: 82449.34, status: 'false', category: 'amphibians', thumbnails: '/upload/suricata.jpg',
},
{
  title: 'Kiskadee, great', description: 'Best Seller', code: 'lwb721', price: 37931.85, status: 'false', category: 'birds', thumbnails: '/upload/electricidad1.jpg',
},
{
  title: 'Savanna baboon', description: 'Discounted Price', code: 'pig203', price: 1749.34, status: 'true', category: 'birds', thumbnails: '/upload/electricidad1.jpg',
},
{
  title: 'Pied kingfisher', description: 'Limited Edition', code: 'kbg560', price: 87562.69, status: 'true', category: 'birds', thumbnails: '/upload/suricata.jpg',
},
{
  title: 'White-cheeked pintail', description: 'Premium Quality', code: 'gva189', price: 11482.59, status: 'false', category: 'amphibians', thumbnails: '/upload/electricidad1.jpg',
},
{
  title: 'Mallard', description: 'New Arrival', code: 'uww805', price: 56950.68, status: 'true', category: 'mammals', thumbnails: '/upload/gatito.jpg',
},
{
  title: 'Arctic lemming', description: 'Premium Quality', code: 'qmr748', price: 69848.98, status: 'false', category: 'birds', thumbnails: '/upload/gatito.jpg',
},
{
  title: 'Northern elephant seal', description: 'New Arrival', code: 'gyr842', price: 7979.24, status: 'false', category: 'amphibians', thumbnails: '/upload/electricidad1.jpg',
},
{
  title: 'Tammar wallaby', description: 'New Arrival', code: 'ofp158', price: 1241.08, status: 'true', category: 'fish', thumbnails: '/upload/electricidad1.jpg',
},
{
  title: 'Insect, stick', description: 'Best Seller', code: 'god406', price: 76504.69, status: 'true', category: 'fish', thumbnails: '/upload/electricidad1.jpg',
},
{
  title: 'Cobra, cape', description: 'New Arrival', code: 'niv085', price: 78891.19, status: 'false', category: 'amphibians', thumbnails: '/upload/electricidad1.jpg',
},
{
  title: 'Gull, dusky', description: 'New Arrival', code: 'ehm511', price: 56466.7, status: 'false', category: 'mammals', thumbnails: '/upload/electricidad1.jpg',
},
{
  title: 'Eastern diamondback rattlesnake', description: 'New Arrival', code: 'ylj654', price: 22890.97, status: 'false', category: 'amphibians', thumbnails: '/upload/electricidad1.jpg',
},
{
  title: 'White-mantled colobus', description: 'Limited Edition', code: 'mcs094', price: 98584.19, status: 'false', category: 'invertebrates', thumbnails: '/upload/electricidad1.jpg',
},
{
  title: 'Black-cheeked waxbill', description: 'New Arrival', code: 'tuh062', price: 44503.43, status: 'true', category: 'amphibians', thumbnails: '/upload/electricidad1.jpg',
},
{
  title: 'Steenbuck', description: 'Limited Edition', code: 'eyy034', price: 71711.3, status: 'false', category: 'invertebrates', thumbnails: '/upload/electricidad1.jpg',
},
{
  title: 'Hippopotamus', description: 'Premium Quality', code: 'rxs492', price: 56005.91, status: 'true', category: 'mammals', thumbnails: '/upload/gatito.jpg',
},
{
  title: 'Wallaby, dama', description: 'New Arrival', code: 'hdw022', price: 3314.23, status: 'true', category: 'invertebrates', thumbnails: '/upload/electricidad1.jpg',
},
{
  title: 'Indian jackal', description: 'Best Seller', code: 'xoe466', price: 29886.22, status: 'true', category: 'reptiles', thumbnails: '/upload/suricata.jpg',
},
{
  title: 'Puna ibis', description: 'Limited Edition', code: 'ohz209', price: 48847.39, status: 'false', category: 'fish', thumbnails: '/upload/suricata.jpg',
},
{
  title: 'Jungle kangaroo', description: 'Best Seller', code: 'njv089', price: 44455.33, status: 'true', category: 'invertebrates', thumbnails: '/upload/gatito.jpg',
},
{
  title: 'Grey lourie', description: 'New Arrival', code: 'noj554', price: 7859.65, status: 'false', category: 'fish', thumbnails: '/upload/electricidad1.jpg',
},
{
  title: 'Wild turkey', description: 'Best Seller', code: 'obr742', price: 28924.55, status: 'true', category: 'invertebrates', thumbnails: '/upload/gatito.jpg',
},
{
  title: "Pallas's fish eagle", description: 'Limited Edition', code: 'bri789', price: 70257.49, status: 'false', category: 'invertebrates', thumbnails: '/upload/suricata.jpg',
},
{
  title: 'Squirrel, malabar', description: 'Discounted Price', code: 'ume118', price: 13714.05, status: 'false', category: 'fish', thumbnails: '/upload/suricata.jpg',
},
{
  title: 'Deer, white-tailed', description: 'Limited Edition', code: 'xtz097', price: 97928.27, status: 'false', category: 'invertebrates', thumbnails: '/upload/electricidad1.jpg',
},
{
  title: 'Ostrich', description: 'Premium Quality', code: 'xkz842', price: 67775.12, status: 'false', category: 'fish', thumbnails: '/upload/suricata.jpg',
},
{
  title: 'Squirrel, pine', description: 'Best Seller', code: 'ngo318', price: 58354.14, status: 'false', category: 'fish', thumbnails: '/upload/suricata.jpg',
},
{
  title: 'Boa, malagasy ground', description: 'Premium Quality', code: 'oms727', price: 84495.22, status: 'false', category: 'mammals', thumbnails: '/upload/suricata.jpg',
},
{
  title: 'Striped skunk', description: 'Premium Quality', code: 'sfp594', price: 73839.4, status: 'false', category: 'fish', thumbnails: '/upload/suricata.jpg',
},
{
  title: 'Booby, masked', description: 'Best Seller', code: 'aga588', price: 4110.86, status: 'false', category: 'reptiles', thumbnails: '/upload/gatito.jpg',
},
{
  title: 'Gull, dusky', description: 'Best Seller', code: 'pwm867', price: 42362.99, status: 'true', category: 'amphibians', thumbnails: '/upload/electricidad1.jpg',
},
{
  title: 'Dove, emerald-spotted wood', description: 'Discounted Price', code: 'ozn041', price: 88498.43, status: 'true', category: 'fish', thumbnails: '/upload/electricidad1.jpg',
},
{
  title: 'Bushbaby, large-eared', description: 'Best Seller', code: 'ifb083', price: 78716.42, status: 'false', category: 'fish', thumbnails: '/upload/gatito.jpg',
},
{
  title: 'Argalis', description: 'Discounted Price', code: 'cxj608', price: 47896.49, status: 'true', category: 'invertebrates', thumbnails: '/upload/gatito.jpg',
},
{
  title: 'Lizard, frilled', description: 'Limited Edition', code: 'ank364', price: 87261.08, status: 'true', category: 'reptiles', thumbnails: '/upload/suricata.jpg',
},
{
  title: 'Black bear', description: 'New Arrival', code: 'htv873', price: 83558.69, status: 'false', category: 'fish', thumbnails: '/upload/electricidad1.jpg',
}];

export default productData;
