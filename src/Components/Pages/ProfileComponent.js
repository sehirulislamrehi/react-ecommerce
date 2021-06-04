
import FooterComponent from "../Includes/FooterComponent";
import LeftContentComponent from "../Includes/LeftContentComponent";
import CartComponent from "../Includes/mob/CartComponent";
import SearchComponent from "../Includes/mob/SearchComponent";
import SideBarComponent from "../Includes/mob/SideBarComponent";
import NavbarComponent from "../Includes/pc/NavbarComponent";
import TopbarComponent from "../Includes/pc/TopbarComponent";
import TopLogoComponent from "../Includes/pc/TopLogoComponent";

import { useHistory } from "react-router-dom"
import Swal from "sweetalert2"
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const ProfileComponent = () => {

     const history = useHistory()

     if( !localStorage.getItem("authenticated") ){
          history.push("/login")
     }
     else{
          
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
                                                       <h4>Sehirul Islam Rehi</h4>
                                                       <p style={{
                                                            margin:"10px 0"
                                                       }}
                                                  >mdsehirulislamrehi@gmail.com</p>
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
                                                            <tr>
                                                                 <th scope="row">#15</th>
                                                                 <td>Active</td>
                                                                 <td>
                                                                      Rehi
                                                                 </td>
                                                                 <td>
                                                                      Yes
                                                                 </td>
                                                                 <td>
                                                                      100
                                                                 </td>
                                                                 <td>
                                                                      6/4/2021
                                                                 </td>
                                                                 <td>
                                                                      
                                                                           <button>View</button>
                                                                      <button>Delete Invoice</button>
                                                                 </td>
                                                            </tr>
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

     
}

export default ProfileComponent