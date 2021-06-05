import { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom"

import FooterComponent from "../Includes/FooterComponent";
import LeftContentComponent from "../Includes/LeftContentComponent";
import CartComponent from "../Includes/mob/CartComponent";
import SearchComponent from "../Includes/mob/SearchComponent";
import SideBarComponent from "../Includes/mob/SideBarComponent";
import NavbarComponent from "../Includes/pc/NavbarComponent";
import TopbarComponent from "../Includes/pc/TopbarComponent";
import TopLogoComponent from "../Includes/pc/TopLogoComponent";

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

          <div className="id">

               <div className="section-top-fixed">
                    <div className="for-pc">
                         <TopbarComponent></TopbarComponent>
                         <TopLogoComponent></TopLogoComponent>
                         <NavbarComponent></NavbarComponent>
                    </div>

                    <div className="for-mob">
                         <SideBarComponent></SideBarComponent>
                         <SearchComponent></SearchComponent>
                         <CartComponent></CartComponent>
                    </div>
               </div>

               <section className="website_main_section" id="website_main_section">
                    <div className="website_main_main_row">

                         <div className="left-content">
                              <LeftContentComponent></LeftContentComponent>
                         </div>

                         <div className="right-content">
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
                                                  </Link>
                                                  </div>
                                             </div>
                                             ))}
                                        </div>
                                   </div>
                              </section>
                         <FooterComponent></FooterComponent>
                         
                         </div>

                    </div>
               </section>

          </div>
          
     );
}

export default ShopComponent