
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios"
import { Link } from "react-router-dom"

const CategoryDetail = () => {
     window.scrollTo(0,0)

     const { slug } =  useParams();
     const [ product, set_product ] = useState()
     const [ category, set_category ] = useState()
     const url = `https://vuebackend.sehirulislamrehi.com/api/category/${slug}`
     

     useEffect( () => {
          axios.get(url,{})
          .then( res => {
               set_category(res.data.category)
               set_product(res.data.product.data)
          })
          .catch( err => {
               
          })
     },[url])
     
     return (
          <section
          style={
               {
                    padding: "30px 0"
               }
          }
          >
               <div className="container-fluid">

                    <div className="row"
                    style={
                         {
                              paddingBottom: "30px"
                         }
                    }
                    >
                         <div className="col-md-12">
                              { category && (
                                   
                                   <h2
                                   style={
                                        {
                                             textAlign: "left"
                                        }
                                   }
                                   >{category}</h2>
                              )}
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
export default CategoryDetail