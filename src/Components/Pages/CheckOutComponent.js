
import FooterComponent from "../Includes/FooterComponent";
import LeftContentComponent from "../Includes/LeftContentComponent";
import CartComponent from "../Includes/mob/CartComponent";
import SearchComponent from "../Includes/mob/SearchComponent";
import SideBarComponent from "../Includes/mob/SideBarComponent";
import NavbarComponent from "../Includes/pc/NavbarComponent";
import TopbarComponent from "../Includes/pc/TopbarComponent";
import TopLogoComponent from "../Includes/pc/TopLogoComponent";

import { useHistory } from "react-router-dom"

const CheckOut = () => {

     const history = useHistory()
     if( !localStorage.getItem("authenticated") ){
          history.push("/login")
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
                                                            <tr>
                                                                 <td>
                                                                      <img src="https://vuebackend.sehirulislamrehi.com/images/product/65.jpg" width="32px" alt="">
                                                                      </img>
                                                                 </td>
                                                                 <td>Sunsilk Shampoo Hijab Anti Dandruff (1GB Data Free) 366ml</td>
                                                                 <td>
                                                                      <button>-</button>
                                                                      <input type="number" readonly="readonly" class="quantity"></input>
                                                                      <button>+</button>
                                                                 </td>
                                                                 <td> 45000 BDT </td>
                                                                 <td>
                                                                      <button>Remove Cart</button>
                                                                 </td>
                                                            </tr>
                                                       </tbody>
                                                  </table>
                                             </div>
                                             <div class="col-md-3">
                                                  <div class="order-summary">
                                                       <h4>Order Summary</h4>
                                                       <p>Delivery Charge 50 BDT</p>
                                                       <p>Total: <span>45050 BDT</span></p>
                                                       <button>Place Order</button>
                                                  </div>
                                             </div>
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

export default CheckOut;