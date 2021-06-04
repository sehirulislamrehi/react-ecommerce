

import { useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useHistory } from "react-router";

const MySwal = withReactContent(Swal)

const RegisterComponent = () => {

     const [ name, set_name ] = useState('');
     const [ email, set_email ] = useState('');
     const [ password, set_password ] = useState('');
     const [ password_confirmation, set_confirm_password ] = useState();
     const url = "https://vuebackend.sehirulislamrehi.com/api/visitor/registration"
     const history = useHistory()

     let [ errors, set_errors ] = useState([]);

     const do_register = () => { 

          document.getElementById("spinner-border").style.display = "block"

          const form_data = new FormData()
          
          form_data.append("name", name)
          form_data.append("email", email)
          form_data.append("password", password)
          form_data.append("password_confirmation", password_confirmation)

          
          axios.post(url, form_data)
          .then( res => {
               document.getElementById("spinner-border").style.display = "none"
               if( res.data.visitor ){
                    MySwal.fire({
                         title: "Success!",
                         text: "Registration Successfully Done. Please Login Here",
                    })
                    history.push('/login')
               }
          })
          .catch( err => {

               MySwal.fire({
                    title: "Warning!",
                    text: "Please fill up the input field properly",
               })

               document.getElementById("spinner-border").style.display = "none"
               let singleError = err.response.data.error
               let distructured_error = {...singleError}
               set_errors(distructured_error)
          })

          
     }




     return(
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
                                   Register Here
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
                                             <label>Name</label>

                                             <input type="name" value={name} onChange={
                                                  e => {
                                                       set_name(e.target.value)
                                                  }
                                             } class="form-control" placeholder="Enter your name" required></input>
                                             
                                             { errors.name && 
                                                  <small style={{
                                                       color: "red"
                                                  }}>{errors.name[0]}</small>
                                             }
                                             
                                        </div>
                                        <div class="form-group" style={{
                                             position: "relative", marginTop: "20px"
                                             }}>
                                             <label>Email</label>
                                             <input type="email" onChange={e => {set_email(e.target.value)}} class="form-control" placeholder="Enter your email address" required></input>
                                             { errors.email && 
                                                  <small style={{
                                                       color: "red"
                                                  }}>{errors.email[0]}</small>
                                             }
                                        </div>
                                        <div class="form-group" style={{
                                             position: "relative", marginTop: "20px"
                                             }}>
                                             <label>Password</label>
                                             <input type="password" onChange={e => {set_password(e.target.value)}}  class="form-control" placeholder="Enter your password" required></input>
                                             { errors.password && 
                                                  <small style={{
                                                       color: "red"
                                                  }}>{errors.password[0]}</small>
                                             }
                                        </div>
                                        <div class="form-group" style={{
                                             position: "relative", marginTop: "20px"
                                             }}>
                                             <label>Confirm Password</label>
                                             <input type="password" onChange={e => { set_confirm_password(e.target.value)}} class="form-control" placeholder="Enter your password again" required></input>
                                             { errors.password && 
                                                  <small style={{
                                                       color: "red"
                                                  }}>{errors.password[0]}</small>
                                             }
                                        </div>
                                        <div class="form-group" style={{
                                             position: "relative", marginTop: "20px"
                                             }}> 
                                             <button type="button" onClick={do_register} class="auth-submit">
                                                  <div class="spinner-border" id="spinner-border" role="status" style={{display:"none"}}>
                                                       <span class="sr-only">Loading...</span>
                                                  </div>
                                                  Register
                                             </button>
                                        </div>
                                   </form>
                              </div>

                              <div class="col-md-4 offset-md-4 col-12">
                                   <p>Already Registered? Go to <Link to="/login">login</Link> page</p>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}

export default RegisterComponent;