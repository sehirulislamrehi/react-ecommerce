
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom"
import axios from "axios"
import Swal from "sweetalert2"
import withReactContent from 'sweetalert2-react-content'

import FooterComponent from "../Includes/FooterComponent";
import LeftContentComponent from "../Includes/LeftContentComponent";
import CartComponent from "../Includes/mob/CartComponent";
import SearchComponent from "../Includes/mob/SearchComponent";
import SideBarComponent from "../Includes/mob/SideBarComponent";
import NavbarComponent from "../Includes/pc/NavbarComponent";
import TopbarComponent from "../Includes/pc/TopbarComponent";
import TopLogoComponent from "../Includes/pc/TopLogoComponent";

const MySwal = withReactContent(Swal)

const LoginComponent = () => {

     const history = useHistory()


     if( localStorage.getItem("authenticated") ){
          history.push("/profile")
     }
     
     const [ email, set_email ] = useState('')
     const [ password, set_password ] = useState('')
     const [ errors, set_error ] = useState()
     const url = "https://vuebackend.sehirulislamrehi.com/api/visitor/signin"

     const do_login = () => {
          const form_data = new FormData()

          form_data.append("email", email)
          form_data.append("password", password)

          axios.post(url,form_data)
          .then( res => {

               if( res.data.token ){
                    MySwal.fire({
                         title : "Success",
                         text : "Login Successfully Done. Redirecting Please wait."
                    })
                    localStorage.setItem('authenticated',res.data.token)
                    
                    if( localStorage.getItem('authenticated') ){
                         history.push('/profile')
                    }
                    else{
                         history.push('/login')
                    }
               }
               else{
                    history.push('/login')
               }
               
          })
          .catch( err => {
               if( err.response.data.invalid ){
                    MySwal.fire({
                         title : "warning",
                         text : err.response.data.invalid,
                    })
               }
               const single_error = err.response.data.error
               const distructured_error = {...single_error}
               set_error(distructured_error)
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
                              <section
                                   style={
                                        {
                                             padding: "30px 0"
                                        }
                                   }
                                   className="auth-section"
                                   >
                                        <div className="container-fluid">
                                             <div className="row">
                                                  <div className="col-md-12">
                                                       <h1 className="text-center">
                                                            Login Here
                                                       </h1>
                                                  </div>
                                             </div>
                                             <div className="row">
                                                  <div className="auth-box" style={{width: "100%"}}>
                                                       <div class="col-md-4 offset-md-4 col-12">
                                                            <form action="" method="">
                                                                 <div class="form-group" style={{
                                                                      position: "relative", marginTop: "20px"
                                                                      }}>
                                                                      <label>Email</label>
                                                                      <input type="email"
                                                                      onChange={
                                                                           e => {
                                                                                set_email(e.target.value)
                                                                           }
                                                                      }
                                                                      class="form-control" placeholder="Enter your email address" required></input>
                                                                      {
                                                                           errors &&
                                                                           <small
                                                                           style={{
                                                                                color : "red"
                                                                           }}
                                                                           >
                                                                                {errors.email}
                                                                           </small>
                                                                      }
                                                                      
                                                                 </div>
                                                                 <div class="form-group" style={{
                                                                      position: "relative", marginTop: "20px"
                                                                      }}>
                                                                      <label>Password</label>
                                                                      <input
                                                                      type="password"
                                                                      onChange={
                                                                           e => {
                                                                                set_password(e.target.value)
                                                                           }
                                                                      }
                                                                      class="form-control" placeholder="Enter your password" required></input>
                                                                      {
                                                                           errors &&
                                                                           <small
                                                                           style={{
                                                                                color : "red"
                                                                           }}
                                                                           >
                                                                                {errors.password}
                                                                           </small>
                                                                      }
                                                                 </div>
                                                                 <div class="form-group" style={{
                                                                      position: "relative", marginTop: "20px"
                                                                      }}> 
                                                                      <button 
                                                                      onClick={
                                                                           do_login
                                                                      }
                                                                      type="button" class="auth-submit">
                                                                           <div class="spinner-border" role="status" style={{display:"none"}}>
                                                                                <span class="sr-only">Loading...</span>
                                                                           </div>
                                                                           Login
                                                                      </button>
                                                                 </div>
                                                            </form>
                                                       </div>

                                                       <div class="col-md-4 offset-md-4 col-12">
                                                            <p>Not registered yet? Go to <Link to="/register">register</Link> page</p>
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
export default LoginComponent;