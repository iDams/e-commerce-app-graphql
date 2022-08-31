//const { products, categories } = require("../db");
exports.Query = {
  hello: () => "Hello world!",
  numberOfUsers: () => 10,
  price: () => 10.99,
  isCool: () => true,
  arryOfUsers: () => ["Marco", "Astorga", "Gonzalez"],
  products: (parent, { filter }, { products, reviews }) => {
    let fiilteredProducts = products;

    if (filter) {
      const { onSale, avgRating } = filter;
      if (onSale) {
        fiilteredProducts = fiilteredProducts.filter((product) => {
          return product.onSale;
        });
      }
      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        fiilteredProducts = fiilteredProducts.filter((product) => {
          let sumRating = 0;
          let numberOfReviews = 0;
           reviews.forEach((review) => {
            if (review.productID === product.id) {
              sumRating += review.rating;
              numberOfReviews++;
            }
          });
          const avgProductRating = sumRating / numberOfReviews;

          return avgProductRating >= avgRating;
        });
      }
    }

    return fiilteredProducts;
  },
  product: (parent, { id }, { products }) =>
    products.find((product) => product.id === id), // find product with id equal to args.id and return it if found else return null
  categories: (parent, args, { categories }) => categories,
  category: (parent, { id }, { categories }) =>
    categories.find((category) => category.id === id),
};

//const { products, categories } = require("../db");
//exports.Query= {
// hello: () => {
//   return "Hello world!";
// },
// numberOfUsers: () => {
//   return 10;
// },
// price: () => {
//   return 10.99;
// },
// isCool: () => {
//   return true;
// },
// arryOfUsers: () => {
//   return ["Marco", "Astorga", "Gonzalez"];
// },
// products: () => {
//   return products;
// },
// product: (parent, args) => {
//   return products.find((product) => product.id === args.id);  // find product with id equal to args.id and return it if found else return null
// },
// categories: () => {
//   return categories;
// },
// category: (parent, args) => {
//   const categoryID = args.id;   // get the category id from the args
//   const { id } = args; // same as above but shorter syntax (destructuring)   get the category id from the args
//   // console.log(categoryID);
//   // console.log(id);
//   return categories.find((category) => category.id === args.id);  // find the category in the categories array that matches the category id
//}
