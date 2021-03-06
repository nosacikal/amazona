const bcrypt = require('bcrypt')

const data = {
  users: [
    {
      name: 'Nosa',
      email: 'nosacikal@gmail.com',
      password: bcrypt.hashSync('1234', 10),
      isAdmin: true,
    },
    {
      name: 'Yuniar',
      email: 'yuniar@gmail.com',
      password: bcrypt.hashSync('1234', 10),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Nike Slim Shirt',
      category: 'Shirt',
      image: '/images/p1.jpg',
      price: 120,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
      countInStock: 10,
    },
    {
      name: 'Adidas Fit Shirt',
      category: 'Shirt',
      image: '/images/p2.jpg',
      price: 100,
      brand: 'Adidas',
      rating: 3.0,
      numReviews: 12,
      description: 'high quality product',
      countInStock: 10,
    },
    {
      name: 'Lacoste Free Shirt',
      category: 'Shirt',
      image: '/images/p3.jpg',
      price: 220,
      brand: 'Lacoste',
      rating: 4.8,
      numReviews: 17,
      description: 'high quality product',
      countInStock: 0,
    },
    {
      name: 'Nike Slim Pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 78,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
      countInStock: 5,
    },
    {
      name: 'Puma Slim Pant',
      category: 'Pants',
      image: '/images/p5.jpg',
      price: 65,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 8,
      description: 'high quality product',
      countInStock: 0,
    },
    {
      name: 'Adidas Fit Pant',
      category: 'Pants',
      image: '/images/p6.jpg',
      price: 139,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
      countInStock: 7,
    },
  ],
}

module.exports = data
