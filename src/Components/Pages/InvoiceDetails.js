import FooterComponent from "../Includes/FooterComponent";
import LeftContentComponent from "../Includes/LeftContentComponent";
import CartComponent from "../Includes/mob/CartComponent";
import SearchComponent from "../Includes/mob/SearchComponent";
import SideBarComponent from "../Includes/mob/SideBarComponent";
import NavbarComponent from "../Includes/pc/NavbarComponent";
import TopbarComponent from "../Includes/pc/TopbarComponent";
import TopLogoComponent from "../Includes/pc/TopLogoComponent";

import axios from "axios"
import { useHistory, useParams } from "react-router";
import { useEffect, useState } from "react";

const InvoiceDetails = () => {
     window.scrollTo(0,0)

     const { id } = useParams()
     const [product, set_product] = useState()
     const [order, set_order] = useState()

     const url = `https://vuebackend.sehirulislamrehi.com/api/profile/invoice/${id}` 

     useEffect(() => {
          axios.get(url)
          .then( res => {
               set_product(res.data.product)
               set_order(res.data.order[0])
          })
     },[url])


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
                              <section class="invoice-detail" style={{padding: "30px 0"}}>
                                   {
                                        order && 
                                   <div class="container-fluid">
                                   
                                        <div class="row">
                                             <div class="col-md-12">
                                                  <h3>Invoice No :  
                                                       {order.invoice_id}
                                                  </h3>
                                             </div>
                                        </div>

                                        <div class="row">
                                             <div class="col-md-12 table-responsive">
                                                  <table class="table table-striped">
                                                       <thead>
                                                       <tr>
                                                            <th scope="col">Image</th>
                                                            <th scope="col">Name</th>
                                                            <th scope="col">Quantity</th>
                                                            <th scope="col">Unit Price</th>
                                                            <th scope="col">Total</th>
                                                       </tr>
                                                       </thead>
                                                       <tbody>
                                                            {
                                                                 product && product.map((item, index) => (
                                                                      
                                                                 <tr >
                                                                 
                                                                      <td>
                                                                           <img src={item.image} width="32px" alt=""></img>
                                                                      </td>
                                                                      <td>
                                                                      { item.name }
                                                                      </td>
                                                                      <td>
                                                                      {item.qty}
                                                                      </td>
                                                                      <td >
                                                                      {item.price}
                                                                      </td>
                                                                      <td >
                                                                      {item.total}
                                                                      </td>
                                                                 </tr>
                                                                 ))
                                                            }
                                                            
                                                       </tbody>
                                                  </table>
                                             </div>
                                        </div>
                                        
                                   </div>
                                   
                              }
                              </section>
                              <FooterComponent></FooterComponent>
                         
                         </div>

                    </div>
               </section>
          </div>
     );
}

export default InvoiceDetails;