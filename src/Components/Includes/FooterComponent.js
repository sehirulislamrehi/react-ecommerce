const FooterComponent = () => {
     return (
                <footer>

                    <div className="footer-top">
                        <div className="container-fluid">
                            <div className="row" style={{width: "100%"}}>

                                <div className="col-md-3">
                                    <div className="left">
                                        <h4>Be member with us</h4>
                                        <p>...and receive exciting offers</p>
                                    </div>
                                </div>

                                <div className="col-md-6" style={{position: "relative"}}>
                                    <div className="middle">
                                        <div className="row">

                                            <div className="col-md-10 col-10">
                                                <form action="" id="newsletter_form">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control"
                                                            placeholder="Enter your email address"></input>
                                                    </div>
                                                </form>
                                            </div>

                                            <div className="col-md-2 col-2" style={{position: "relative"}}>
                                                <button className="newsletter-button" >Submit</button>

                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3" style={{position: "relative"}}>
                                    <div className="right">
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-google"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-vimeo-v"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fas fa-rss"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="footer-middle">
                        <div className="container-fluid">
                            <div className="row">

                                <div className="col-md-2 col-12">
                                    <div className="widget-box">
                                        <img src="/images/logo.png" className="img-fluid" alt=""></img>
                                        <p>Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia anas.</p>
                                    </div>
                                </div>

                                <div className="col-md-2 col-12">
                                    <div className="widget-box">
                                        <img src="/images/bkash_payment_logo-2.png" className="img-fluid" alt=""></img>
                                    </div>
                                </div>

                                <div className="col-md-2 col-12">
                                    <div className="widget-box">
                                        <h4>Help</h4>
                                        <ul>
                                            <li><a href="#">Help</a></li>
                                            <li><a href="#">Information</a></li>
                                            <li><a href="#">Privacy Plicy</a></li>
                                            <li><a href="#">Shipping Details</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-md-2 col-12">
                                    <div className="widget-box">
                                        <h4>Support</h4>
                                        <ul>
                                            <li><a href="#">Contact Us</a></li>
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">Career</a></li>
                                            <li><a href="#">Refund & Returns</a></li>
                                            <li><a href="#">Deliveries</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-md-2 col-12">
                                    <div className="widget-box">
                                        <h4>Information</h4>
                                        <ul>
                                            <li><a href="#">Search Terms</a></li>
                                            <li><a href="#">Advance Search</a></li>
                                            <li><a href="#">Help & Faq's</a></li>
                                            <li><a href="#">Store Location</a></li>
                                            <li><a href="#">Order & Returns</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-md-2 col-12">
                                    <div className="widget-box">
                                        <h4>Contact Us</h4>
                                        <ul>
                                            <li>Address: Gazipur , Joydebpur, Dhaka.</li>
                                            <li> <i className="fas fa-phone"></i> GOT QUESTIONS ? CALL US 24/7!</li>
                                            <li>01405-313233, 01403-919293</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    <ul>
                                        <li>
                                            <img src="/images/card-1.png" alt=""></img>
                                        </li>
                                        <li>
                                            <img src="/images/card-2.png" alt=""></img>
                                        </li>
                                        <li>
                                            <img src="/images/card-3.png" alt=""></img>
                                        </li>
                                        <li>
                                            <img src="/images/card-4.png" alt=""></img>
                                        </li>
                                        <li>
                                            <img src="/images/card-5.png" alt=""></img>
                                        </li>
                                        <li>
                                            <img src="/images/card-8.png" alt=""></img>
                                        </li>
                                        <li>
                                            <img src="/images/card-7.png" alt="" ></img>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="developed-by">
                         <p style={{textAlign: "center"}}>Developed By 
                            Sehirul Islam Rehi     
                         </p>
                    </div>

                </footer>
                
                
     );
}
export default FooterComponent;