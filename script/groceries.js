const faker = require('faker')

const groceryString =
  'Alfalfa Sprouts, Apple, Apricot, Artichoke, Asian Pear, Asparagus, Atemoya, Avocado, Bamboo Shoots, Banana, Beans, Bean Sprouts, Beets, Belgian Endive, Bitter Melon, Bell Peppers, Blackberries, Blueberries, Bok Choy, Boniato, Boysenberries, Broccoflower, Broccoli, Brussels Sprouts, Cabbage (green and red), Cantaloupe, Carambola, Carrots, Casaba Melon, Cauliflower, Celery, Chayote, Cherimoya, Cherries, Coconuts, Collard Greens, Corn, Cranberries, Dates, Eggplant, Endive, Escarole, Feijoa, Fennel, Figs, Garlic, Gooseberries, Grapefruit, Grapes, Green Beans, Green Onions, Guava, Hominy, Honeydew Melon, Horned Melon, Iceberg Lettuce, Jerusalem Artichoke, Jicama, Kale, Kiwifruit, Kohlrabi, Kumquat, Leeks, Lemons, Romaine Lettuce, Lima Beans, Limes, Longan, Loquat, Lychee, Madarins, Malanga, Mandarin Oranges, Mangos, Mulberries, Mushrooms, Nectarines, Okra, Onion, Oranges, Papayas, Parsnip, Passion Fruit, Peaches, Pears, Peas, Bell Peppers, Persimmons, Pineapple, Plantains, Plums, Pomegranate, Potatoes, Prickly Pear, Prunes, Pummelo, Pumpkin, Quince, Radicchio, Radishes, Raisins, Raspberries, Red Cabbage, Rhubarb, Romaine Lettuce, Rutabaga, Shallots, Snow Peas, Spinach, Sprouts, acorn squash, buttercup squash, butternut squash, Strawberries, gr Beans, Sweet Potato, Tangelo, Tangerines, Tomatillo, Tomato, Turnip, Ugli Fruit, Watermelon, Water Chestnuts, Watercress, Waxed Beans, Yams, Yellow Squash, Yuca, Zucchini Squash,'

const groceriesArray = groceryString.split(',')

const imageUrlsString =
  'https://images.pexels.com/photos/7937467/pexels-photo-7937467.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/3652898/pexels-photo-3652898.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/1028599/pexels-photo-1028599.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/3912846/pexels-photo-3912846.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/5945765/pexels-photo-5945765.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/351679/pexels-photo-351679.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.unsplash.com/photo-1444459094717-a39f1e3e0903?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80,https://images.pexels.com/photos/3029520/pexels-photo-3029520.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/7262407/pexels-photo-7262407.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/5945848/pexels-photo-5945848.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/4264046/pexels-photo-4264046.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/8952662/pexels-photo-8952662.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/1034825/pexels-photo-1034825.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/1633522/pexels-photo-1633522.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/8285477/pexels-photo-8285477.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/5479378/pexels-photo-5479378.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/892808/pexels-photo-892808.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/2539177/pexels-photo-2539177.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/7657338/pexels-photo-7657338.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/4157843/pexels-photo-4157843.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/5147516/pexels-photo-5147516.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/7209549/pexels-photo-7209549.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/1359326/pexels-photo-1359326.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/41171/brussels-sprouts-sprouts-cabbage-grocery-41171.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/4198017/pexels-photo-4198017.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/1622421/pexels-photo-1622421.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/7227502/pexels-photo-7227502.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/8285477/pexels-photo-8285477.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/8455391/pexels-photo-8455391.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/3872435/pexels-photo-3872435.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/4260541/pexels-photo-4260541.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.unsplash.com/photo-1444459094717-a39f1e3e0903?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80,https://images.pexels.com/photos/35629/bing-cherries-ripe-red-fruit.jpg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/1424457/pexels-photo-1424457.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/750952/pexels-photo-750952.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/306800/pexels-photo-306800.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/2291592/pexels-photo-2291592.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/321551/pexels-photo-321551.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/7543109/pexels-photo-7543109.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.unsplash.com/photo-1444459094717-a39f1e3e0903?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80,https://images.pexels.com/photos/5624265/pexels-photo-5624265.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/7629986/pexels-photo-7629986.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/1458695/pexels-photo-1458695.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/4038778/pexels-photo-4038778.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/46541/currant-immature-mature-bush-46541.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/209549/pexels-photo-209549.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/1680585/pexels-photo-1680585.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/1400172/pexels-photo-1400172.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/2134037/pexels-photo-2134037.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/8257043/pexels-photo-8257043.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/7889978/pexels-photo-7889978.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/5984606/pexels-photo-5984606.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/5644993/pexels-photo-5644993.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/9444008/pexels-photo-9444008.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.unsplash.com/photo-1444459094717-a39f1e3e0903?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80,https://images.pexels.com/photos/51372/kale-vegetables-brassica-oleracea-var-sabellica-l-51372.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/867349/pexels-photo-867349.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.unsplash.com/photo-1444459094717-a39f1e3e0903?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80,https://images.pexels.com/photos/6387861/pexels-photo-6387861.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/7363693/pexels-photo-7363693.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/5871215/pexels-photo-5871215.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/5644993/pexels-photo-5644993.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/5677794/pexels-photo-5677794.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/10432854/pexels-photo-10432854.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/5946103/pexels-photo-5946103.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.unsplash.com/photo-1444459094717-a39f1e3e0903?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80,https://images.pexels.com/photos/46518/lychee-fruits-pink-food-46518.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/6512616/pexels-photo-6512616.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/1884417/pexels-photo-1884417.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/6069722/pexels-photo-6069722.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/6206290/pexels-photo-6206290.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/64282/mulberries-red-fruit-berry-64282.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/36438/mushrooms-brown-mushrooms-cook-eat.jpg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/5941/food-healthy-plant-fruits.jpg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/2583187/pexels-photo-2583187.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/4197445/pexels-photo-4197445.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/2294477/pexels-photo-2294477.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/6419249/pexels-photo-6419249.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.unsplash.com/photo-1444459094717-a39f1e3e0903?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80,https://images.pexels.com/photos/5946097/pexels-photo-5946097.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/2253534/pexels-photo-2253534.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/800356/pexels-photo-800356.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/255469/pexels-photo-255469.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/5479378/pexels-photo-5479378.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/10080956/pexels-photo-10080956.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/1161547/pexels-photo-1161547.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/214158/pexels-photo-214158.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/9718279/pexels-photo-9718279.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/65256/pomegranate-open-cores-fruit-fruit-logistica-65256.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/4110462/pexels-photo-4110462.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/4846501/pexels-photo-4846501.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/434283/pexels-photo-434283.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.unsplash.com/photo-1444459094717-a39f1e3e0903?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80,https://images.pexels.com/photos/3318607/pexels-photo-3318607.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/10376281/pexels-photo-10376281.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/4198041/pexels-photo-4198041.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/4039451/pexels-photo-4039451.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/2291592/pexels-photo-2291592.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/9001203/pexels-photo-9001203.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/6507029/pexels-photo-6507029.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/6607421/pexels-photo-6607421.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/5644993/pexels-photo-5644993.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.unsplash.com/photo-1444459094717-a39f1e3e0903?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80,https://images.pexels.com/photos/4916115/pexels-photo-4916115.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/4963925/pexels-photo-4963925.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/1751149/pexels-photo-1751149.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/113335/pexels-photo-113335.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/3018825/pexels-photo-3018825.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/5377566/pexels-photo-5377566.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/3535387/pexels-photo-3535387.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/70746/strawberries-red-fruit-royalty-free-70746.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/3556686/pexels-photo-3556686.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/3233282/pexels-photo-3233282.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.unsplash.com/photo-1444459094717-a39f1e3e0903?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80,https://images.pexels.com/photos/5378835/pexels-photo-5378835.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/8257043/pexels-photo-8257043.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/5945657/pexels-photo-5945657.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/6280406/pexels-photo-6280406.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/4617253/pexels-photo-4617253.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/9796405/pexels-photo-9796405.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/4062279/pexels-photo-4062279.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/7333595/pexels-photo-7333595.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/7543152/pexels-photo-7543152.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/6073195/pexels-photo-6073195.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/1382394/pexels-photo-1382394.jpeg?auto=compress&cs=tinysrgb&h=350,https://images.pexels.com/photos/5644989/pexels-photo-5644989.jpeg?auto=compress&cs=tinysrgb&h=350,'

const imageUrlsArray = imageUrlsString.split(',')

let groceryObjectsArray = []

for (let i = 0; i < groceriesArray.length; i++) {
  let name = groceriesArray[i]
  let type = faker.random.arrayElement(['fruit', 'vegetable'])
  let season = faker.random.arrayElement(['winter', 'spring', 'summer', 'fall'])
  let price = faker.datatype.number({ min: 100, max: 5000, precision: 25 })
  let imageUrl = imageUrlsArray[i]

  groceryObjectsArray.push({
    name,
    type,
    season,
    price,
    imageUrl,
  })
}

module.exports = groceryObjectsArray
