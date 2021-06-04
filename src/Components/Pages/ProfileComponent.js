
const ProfileComponent = () => {
     return(
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
                              <button>Logout</button>
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
     );
}

export default ProfileComponent