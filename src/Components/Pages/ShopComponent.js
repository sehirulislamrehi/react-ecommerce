import { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom"

const ShopComponent = () => {
     window.scrollTo(0,0)

     const [ product, set_product ] = useState()
     const url = "https://vuebackend.sehirulislamrehi.com/api/product"

     useEffect(() => {
          axios.get(url,{})
          .then( res => {
               set_product(res.data.product.data)
          })
          .catch( err => {

          })
     }, [url])

     return(
          <section>
               <div className="container-fluid">
                    <div className="row" style={
                         {
                              paddingBottom: "30px"
                         }
                    }>
                         <div className="col-md-12">
                              <h2>Our Shop</h2>
                         </div>
                    </div>

                    <div className="row">
                         { product && product.map( (value) => (
                         <div className="col-md-2 col-6">
                              <div className="product-box">
                                  <Link to={`/product_details/${value.slug}`}>
                                      <div className="image">
                                          <img src={value.image} className="img-fluid" alt=""></img>
                                      </div>
                                      <p className="name">{value.name}</p>
                                      {/* <p className="regular_price">100 BDT</p> */}
                                      <p className="offer_price">{ value.offer_price ? value.offer_price : value.regular_price } BDT</p>
                                      <button className="add_cart">Add To Cart</button>
                                  </Link>
                              </div>
                          </div>
                         ))}
                    </div>
               </div>
          </section>
     );
}

export default ShopComponent