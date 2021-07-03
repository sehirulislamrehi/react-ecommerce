import axios from "axios"

import FooterComponent from "../Includes/FooterComponent";
import LeftContentComponent from "../Includes/LeftContentComponent";
import CartComponent from "../Includes/mob/CartComponent";
import SearchComponent from "../Includes/mob/SearchComponent";
import SideBarComponent from "../Includes/mob/SideBarComponent";
import NavbarComponent from "../Includes/pc/NavbarComponent";
import TopbarComponent from "../Includes/pc/TopbarComponent";
import TopLogoComponent from "../Includes/pc/TopLogoComponent";

import { Link } from "react-router-dom"
import { getProfileInvoiceData, profileInvoiceDelete } from "../../action";

import { useHistory } from "react-router-dom"
import Swal from "sweetalert2"
import withReactContent from 'sweetalert2-react-content'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const MySwal = withReactContent(Swal)



const ProfileComponent = () => {

     const history = useHistory()
     const [ name, set_name ] = useState()
     const [ email, set_email ] = useState()
     // const [ invoice, set_invoice ] = useState([])

     if( !localStorage.getItem("authenticated") ){
          history.push("/login")
     }
     
     const dispatch = useDispatch();
          
     const token = localStorage.getItem("authenticated")
     const url = `https://vuebackend.sehirulislamrehi.com/api/profile/${token}`;

     useEffect( () => {

          //get user data
          axios.get(url)
          .then( res => {
               set_name(res.data.visitor.name)
               set_email(res.data.visitor.email)
          })
          .catch( err => {
               console.log(err)
          })

          //get invoice
          let token = localStorage.getItem('authenticated')
          axios.get(`https://vuebackend.sehirulislamrehi.com/api/profile/order/${token}`,)
          .then( res => {
               if( res.data.invoice.length > 0 ){
                    dispatch(getProfileInvoiceData(res.data.invoice))
                    // set_invoice(res.data.invoice)
               }
          })

     },[url])
          
     
     const invoice = useSelector( state => state.profileInvoice )

     const do_logout = () => {
          if( localStorage.getItem('authenticated') ){
               localStorage.removeItem('authenticated')
               history.push('/login')
               MySwal.fire({
                    title : "Success",
                    text : "You are successfully logged out."
               })
          }
          else{
               history.push('/login')
               MySwal.fire({
                    title : "Success",
                    text : "You are successfully logged out."
               })
          }
     }

     //delete invoice
     const delete_invoice = (e) => {
          const id = e
          axios.get(`https://vuebackend.sehirulislamrehi.com/api/invoice/delete/${id}`)
          .then((res) => {
               dispatch(profileInvoiceDelete(res, id))
               // invoice.filter((value, index) => {
                    
               //      if( res.data.invoice ){
               //           if( value.id == id ){
               //                invoice.splice(index, 1)
               //                set_invoice(res.data.invoice)
               //                MySwal.fire({
               //                     title : "Success",
               //                     text : "Invoice Deleted"
               //                })
               //           }
               //      }
               // })
               
          })
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
                              <section className="profile-section">
                                   <div className="container-fluid">

                                        <div className="row">
                                             <div className="col-md-1">
                                                  <img src="/images/user.png" className="img-fluid" alt=""></img>
                                             </div>
                                             <div className="col-md-11">
                                                  {
                                                       name && <h4>{name}</h4>
                                                  }
                                                  
                                                  {
                                                       email &&
                                                       <p style={{
                                                       margin:"10px 0"
                                                            }}
                                                       >
                                                            { email }
                                                       </p>
                                                  }
                                                  
                                                  <button onClick={do_logout} >Logout</button>
                                             </div>
                                        </div>

                                        {/* previous order history */}
                                        <div className="row" style={{
                                             marginTop:"30px"
                                             }}>
                                             <div className="col-md-12">
                                                  <h4>Previous order history</h4>
                                             </div>
                                             
                                             <div className="col-md-12 table-responsive">
                                                  <table className="table table-striped">
                                                       <thead>
                                                       <tr>
                                                            <th scope="col">#Invoice No</th>
                                                            <th scope="col">Status</th>
                                                            <th scope="col">Paid By</th>
                                                            <th scope="col">Is payment done?</th>
                                                            <th scope="col">Total</th>
                                                            <th scope="col">Date</th>
                                                            <th scope="col">Action</th>
                                                       </tr>
                                                       </thead>
                                                       <tbody>
                                                       {
                                                            invoice && invoice.length > 0 ?

                                                            invoice.map( (item, index) => (
                                                                 <tr>
                                                                      <th scope="row">#{item.id}</th>
                                                                      <td>{ item.status }</td>
                                                                      <td>
                                                                      { item.paid_by }
                                                                      </td>
                                                                      <td>
                                                                           {
                                                                                item.is_payment_done ? 'Yes' : 'No'
                                                                           }
                                                                      </td>
                                                                      <td>
                                                                      { item.total }
                                                                      </td>
                                                                      <td>
                                                                      { item.created_at }
                                                                      </td>
                                                                      <td>
                                                                           
                                                                           <button>
                                                                           <Link to={`/invoice_details/${item.id}`}>View</Link>
                                                                           </button>
                                                                           <button onClick={ () => delete_invoice(item.id)} >Delete Invoice</button>
                                                                      </td>
                                                                 </tr>
                                                            ))
                                                            :

                                                            ""
                                                            
                                                       }
                                                       
                                                       </tbody>
                                                  </table>
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

export default ProfileComponent