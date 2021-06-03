
import { Link } from "react-router-dom";

const TopbarComponent = () => {
     return ( 
          <section className="contact-section">
              <div className="container-fluid">
                  <div className="row">

                      <div className="col-md-3 top-col-left">
                          <div className="top-phone">
                              <ul>
                                  <li>
                                      <i className="fas fa-phone"></i>
                                  </li>
                                  <li>
                                      Support 24/7 : 01405-313233 , 01403-919293
                                  </li>
                              </ul>
                          </div>
                      </div>

                      <div className="col-md-2 top-col-middle">
                          <div className="top-phone">
                              <ul>
                                  <li>
                                      <i className="fas fa-envelope"></i>
                                  </li>
                                  <li>
                                      info@onphonic.com
                                  </li>
                              </ul>
                          </div>
                      </div>

                      <div className="col-md-7 top-col-right">
                          <div className="top-useful-link">
                              <ul>
                                  <li>
                                      <Link to="/shop">
                                          Our Shop
                                      </Link>
                                  </li>
                                  <li>
                                      <a href="#">
                                          <i className="fas fa-user"></i>
                                          Sign In
                                      </a>
                                  </li>
                              </ul>
                          </div>
                      </div>

                  </div>
              </div>
            </section>
      
      );
}
 
export default TopbarComponent;