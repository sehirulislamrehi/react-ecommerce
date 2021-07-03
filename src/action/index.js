
//add to cart functionality
export const addToCart = (res) => {
     return{
          type : 'addToCart',
          response : res,
     }
};

//remove cart functionality
export const removeCart = (id) => {
     return{
          type : 'removeCart',
          product_id : id,
     }
};