

exports.Category = {
  products: (parent, { filter }, { products, reviews }) => {
    //console.log(parent);
    const categoryProduct = products.filter(
      (product) => product.categoryID === parent.id
    ); // find the products in the products array that matches the category id of the category that is passed in
    let fiilteredProducts = categoryProduct;

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
};

// const { products } = require("../db");

// products: ({id}, args, { products }) => {
//   // console.log(parent);
//   // const data =products.filter((product) => product.categoryID === parent.id);
//   // console.log(data);
//   return products.filter((product) => product.categoryID === id); // filter the products array and return all products that have the same category id as the category id of the category that is passed in
// }
