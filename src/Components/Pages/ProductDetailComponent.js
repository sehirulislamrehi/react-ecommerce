
import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";

import FooterComponent from "../Includes/FooterComponent";
import LeftContentComponent from "../Includes/LeftContentComponent";
import CartComponent from "../Includes/mob/CartComponent";
import SearchComponent from "../Includes/mob/SearchComponent";
import SideBarComponent from "../Includes/mob/SideBarComponent";
import NavbarComponent from "../Includes/pc/NavbarComponent";
import TopbarComponent from "../Includes/pc/TopbarComponent";
import TopLogoComponent from "../Includes/pc/TopLogoComponent";

import Swal from "sweetalert2"
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

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

     let cartsample = {
          id: "",
          name: "",
          image: "",
          qty: "",
          price: "",
     }

     const [ cart_length, set_cart_length ] = useState()

     const add_to_cart = (e) => {
          const id = e.target.id
          let cart_add = JSON.parse(localStorage.getItem("cart")) || 0;

          axios.get(`https://vuebackend.sehirulislamrehi.com/api/addtocart/${id}`)
          .then( res => {
               let cart = JSON.parse(localStorage.getItem("cart")) || [];
               let exist = false;

               cartsample.id = res.data.product.id;
               cartsample.name = res.data.product.name;
               cartsample.image = res.data.product.image;
               cartsample.qty = 1;
               cartsample.price = res.data.product.offer_price
               ? res.data.product.offer_price
               : res.data.product.regular_price;

               cart.filter((value, index) => {
                    if( exist == false ){
                        if (value.id == cartsample.id) {
                            cart[index].qty += 1;
                            exist = true;
                        }
                    }
               });

               if (exist == false) {
                    cart.push(cartsample);
               }

               localStorage.setItem("cart", JSON.stringify(cart));

               MySwal.fire({
                    title : "Success",
                    text : "Product Added To The Cart"
               })

               let cart_add = JSON.parse(localStorage.getItem("cart"));

               set_cart_length(cart_add.length)
               
          })
     }
     
     
     

     return (

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
                                                       <button onClick={add_to_cart} id={product.id}>
                                                            Add to cart
                                                       </button>
                                                  </div>
                                                  {/* right part end */}

                                                  </div>
                                        )}
                                        
                                   </div>
                              </section>
                              <FooterComponent></FooterComponent>
                         </div>
                    </div>
               </section>

          </div>
          
          
     );
}

export default ProductDetail;