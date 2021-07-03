


const profileInvoice = (state = false, action) => {
     if( action.type == "removeProfileInvoice" ){

          const res = action.response.data.all_invoice

          
          return res;
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