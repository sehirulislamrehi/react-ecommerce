
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

//get profile invoice data
export const getProfileInvoiceData = (res) => {
     return{
          type : 'getProfileInvoiceData',
          response : res,
     }
}    

//delete profile invoice functionality
export const profileInvoiceDelete = (res, id, invoice) => {
     return{
          type : 'removeProfileInvoice',
          response : res,
          product_id : id,
          set_invoice : invoice,
     }
};