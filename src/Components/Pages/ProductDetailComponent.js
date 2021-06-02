
import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";

const ProductDetail = () => {

     {/* window scroll to top */}
     window.scrollTo(0, 0);

     const { slug } =  useParams();
     const url = `https://vuebackend.sehirulislamrehi.com/api/product/${slug}`;
     const [ product, setProduct ] = useState();

     useEffect( () => {
          axios.get(url,{})
          .then( res => {
               setProduct(res.data.product)
          })
          .catch( err => {
               console.log(err)
          })
     },[url])

     

     return (
          
          <section style={
               {
                    padding: "30px 0"
               }
          }>
               <div className="container">
                    {product && (
                         <div className="row">

                              {/* left part start */}
                              <div className="col-md-3">
                                   <img src={product.image} alt="" />
                              </div>
                              {/* left part end */}

                              {/* right part start */}
                              <div className="col-md-9">
                                   <h1>
                                        {product.name}
                                   </h1>
                                   <p style={
                                        {
                                             padding: "15px 0",
                                        }
                                   }>
                                        {product.description}
                                   </p>
                                   <button>
                                        Add to cart
                                   </button>
                              </div>
                              {/* right part end */}

                              </div>
                    )}
                    
               </div>
          </section>
               
          
          
     );
}

export default ProductDetail;