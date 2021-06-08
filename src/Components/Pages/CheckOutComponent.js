
import FooterComponent from "../Includes/FooterComponent";
import LeftContentComponent from "../Includes/LeftContentComponent";
import CartComponent from "../Includes/mob/CartComponent";
import SearchComponent from "../Includes/mob/SearchComponent";
import SideBarComponent from "../Includes/mob/SideBarComponent";
import NavbarComponent from "../Includes/pc/NavbarComponent";
import TopbarComponent from "../Includes/pc/TopbarComponent";
import TopLogoComponent from "../Includes/pc/TopLogoComponent";

import axios from "axios"

import { useHistory } from "react-router-dom"
import { useEffect, useState } from "react";

import Swal from "sweetalert2"
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)



const CheckOut = () => {
     window.scrollTo(0,0)

     let cart = JSON.parse(localStorage.getItem("cart"))
     let total = 0;
     const [ cart_total, set_cart_total ] = useState()
     const [ delivery_charge, set_delivery_charge ] = useState(50)
     const [ product, set_product ] = useState()

     
     let cartsample = {
          id: "",
          name: "",
          image: "",
          qty: "",
          price: "",
     }

     const history = useHistory()

     if( !localStorage.getItem("authenticated") ){
          history.push("/login")
     }

     //total amount calculation
     total = delivery_charge;
     for( let x in cart){
          total += cart[x].price * cart[x].qty
          
     }

     useEffect(() => {
          set_cart_total(total)
          set_product(cart)
     },[set_cart_total,set_product])
     
     const cart_minus = (e) => {
          const id = e.target.id
          let cart = JSON.parse(localStorage.getItem("cart"))
          let exists = false

          cart.filter( (value, index) => {
               if( value.id == id && exists == false && value.qty > 1 ){

                    cartsample.id = id
                    cartsample.name = value.name
                    cartsample.image = value.image
                    cartsample.qty = value.qty -= 1
                    cartsample.price = value.price 
                    total -= parseInt(value.price)

                    cart.splice(index,1,cartsample)

                    localStorage.setItem('cart', JSON.stringify(cart))
               }
          })
          set_cart_total(total)
     }

     const cart_plus = (e) => {
          const id = e.target.id
          let cart = JSON.parse(localStorage.getItem("cart"))
          let exists = false

          cart.filter( (value, index) => {
               if( value.id == id && exists == false ){

                    cartsample.id = id
                    cartsample.name = value.name
                    cartsample.image = value.image
                    cartsample.qty = value.qty += 1
                    cartsample.price = value.price 
                    total += parseInt(value.price)

                    cart.splice(index,1,cartsample)

                    localStorage.setItem('cart', JSON.stringify(cart))
               }
          })
          set_cart_total(total)
     }

     const remove_cart = (e) => {
          const id = e.target.id
          let cart = JSON.parse(localStorage.getItem('cart'))
          
          cart.filter((value,index) => {
               if( value.id == id ){
                    total -= cart[index].price * cart[index].qty
                    cart.splice(index,1)
                    localStorage.setItem('cart', JSON.stringify(cart))
                    MySwal.fire({
                         title : "Success",
                         text : "Product Remove From Cart"
                    })
               }
          })
     }

     const place_order = () => {
          if( localStorage.getItem('authenticated') && localStorage.getItem('cart') ){
               const cartJson =JSON.parse(localStorage.getItem('cart'));
               
               const form = new FormData();
               cartJson.forEach(value => {
                    form.append('id[]', value.id)
                    form.append('qty[]', value.qty)
               })
               form.append("token",localStorage.getItem('authenticated'))

               axios.post("https://vuebackend.sehirulislamrehi.com/api/placeorder",form)
               .then( res => {
                    if( res.data.success ){
                         localStorage.removeItem('cart')
                         history.push("/profile")
                    }
               })
          }
          else{
               MySwal.fire({
                    title : "Error",
                    text : "Something went wrong"
               })
               localStorage.removeItem('cart')
               localStorage.removeItem('authenticated')
               history.push("/login")
          }
     }

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
                              { product && product.length != 0 &&
                              <section class="checkout-section">
                                   <div class="container-fluid">
                                        <div class="row">
                                             <div class="col-md-9 table-responsive">
                                                  <table class="table table-striped">
                                                       <thead>
                                                            <tr>
                                                                 <th scope="col">Image</th>
                                                                 <th scope="col">Name</th>
                                                                 <th scope="col">Quantity</th>
                                                                 <th scope="col">Unit Price</th>
                                                                 <th scope="col">Action</th>
                                                            </tr>
                                                       </thead>
                                                       <tbody>
                                                            {
                                                                 product && product.map((item,index) => (
                                                                      <tr>
                                                                           <td>
                                                                                <img src={item.image} width="32px" alt="">
                                                                                </img>
                                                                           </td>
                                                                           <td>{item.name}</td>
                                                                           <td>
                                                                                <button onClick={cart_minus} id={item.id}>-</button>
                                                                                <input type="number" readonly="readonly" class="quantity" value={item.qty}></input>
                                                                                <button onClick={cart_plus} id={item.id}>+</button>
                                                                           </td>
                                                                           <td> {item.price} BDT </td>
                                                                           <td>
                                                                                <button onClick={remove_cart} id={item.id}>Remove Cart</button>
                                                                           </td>
                                                                      </tr>
                                                                 ))
                                                            }
                                                       </tbody>
                                                  </table>
                                             </div>
                                             <div class="col-md-3">
                                                  <div class="order-summary">
                                                       <h4>Order Summary</h4>
                                                       <p>Delivery Charge {delivery_charge} BDT</p>
                                                       <p>Total: <span>{cart_total} BDT</span></p>
                                                       <button onClick={place_order}>Place Order</button>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </section>}
                              <FooterComponent></FooterComponent>
                         </div>

                    </div>
               </section>
          </div>
     );
}

export default CheckOut;