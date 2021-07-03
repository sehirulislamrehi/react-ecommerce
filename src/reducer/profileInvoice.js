


const profileInvoice = (state = false, action) => {
     if( action.type == "removeProfileInvoice" ){

          const res = action.response
          const id = action.product_id

          const invoice = [action.set_invoice];
          const set_invoice = []

          console.log("Hello")

          invoice.filter((value, index) => {
               if( res.data.invoice ){
                    if( value.id == id ){
                         invoice.splice(index, 1)
                         set_invoice(res.data.invoice)
                    }
               }
          })
          // console.log(set_invoice)
          return set_invoice;
     }
     else if( action.type == "getProfileInvoiceData" ){
          const res = action.response
          return res;
     }
     else{
          return state;
     }
};

export default profileInvoice;