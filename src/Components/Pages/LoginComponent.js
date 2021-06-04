
import { Link } from "react-router-dom"

const LoginComponent = () => {
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
                                             <input type="email" class="form-control" placeholder="Enter your email address" required></input>
                                             <small class="text-red"></small>
                                        </div>
                                        <div class="form-group" style={{
                                             position: "relative", marginTop: "20px"
                                             }}>
                                             <label>Password</label>
                                             <input type="password" class="form-control" placeholder="Enter your password" required></input>
                                             <small  class="text-red"></small>
                                        </div>
                                        <div class="form-group" style={{
                                             position: "relative", marginTop: "20px"
                                             }}> 
                                             <button type="button" class="auth-submit">
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
     );
}
export default LoginComponent;