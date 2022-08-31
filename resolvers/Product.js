exports.Product = {
    category: ({categoryID}, args, { categories }) => categories.find((category) => category.id === categoryID),
    reviews: ({id}, args, { reviews }) => reviews.filter((review) => review.productID === id)

};


// const { categories } = require("../db");
//   category: ({categoryID}, args, { categories }) => {
//     return categories.find((category) => category.id === categoryID); // find the category in the categories array that matches the category id of the product that is passed in
//   },
//};