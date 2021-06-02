import { Link } from "react-router-dom";
import GetCategoryData from "../../../Functionality/GetCategoryData";

const TopLogoComponent = () => {

    const { data:category } = GetCategoryData("https://vuebackend.sehirulislamrehi.com/api/category");
    
     return ( 
          <section className="top-logo">
               <div className="container-fluid">
                    <div className="row">
                         <div className="col-md-1">
                              <div className="logo">
                                  <Link to="/">
                                    <img src="/images/logo.png" className="img-fluid" alt=""></img>
                                  </Link>
                              </div>
                        </div>

                        <div className="col-md-5" style={{position: "relative"}}>
                              <div className="topbar-search">
                                   <form action="">
                                        <div className="form-group cat_block">
                                            <select name="" className="form-control" required>
                                                {category && category.map((data) => (
                                                    <option value={data.id}>{data.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="form-group search_block">
                                             <input type="search" className="form-control" placeholder="Search..." required></input>
                                             <button type="submit" className="search-button">
                                             <i className="fas fa-search"></i>
                                             </button>
                                        </div>
                                   </form>
                              </div>
                        </div>

                        <div className="col-md-6 free-shipping-col" style={{position: "relative"}}>
                            <div className="free-shipping">
                                <div className="row">

                                    <div className="col-md-12" style={{position: "relative"}}>
                                        <div className="cart_block">
                                            <ul>
                                                <li className="cart_box" id="cart_box" >
                                                    <div className="cart_count">
                                                        <p>5</p>
                                                    </div>
                                                    <i className="fas fa-shopping-basket"></i>

                                                    <div className="cart_list" id="cart_list">
                                                        <table className="table table-striped">
                                                            
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <img src="/images/product-1.jpg" width="50px" alt=""></img>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#">Asparagus - 1 kg / Green</a>
                                                                        <p>1 x $229.00 USD</p>
                                                                    </td>
                                                                    <td>
                                                                        <button className="remove_cart">
                                                                            <i className="fas fa-times"></i>
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <img src="/images/product-1.jpg" width="50px" alt=""></img>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#">Asparagus - 1 kg / Green</a>
                                                                        <p>1 x $229.00 USD</p>
                                                                    </td>
                                                                    <td>
                                                                        <button className="remove_cart">
                                                                            <i className="fas fa-times"></i>
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>

                                                        <div className="cart_detail">
                                                            <p className="text-center">Cart Total <span>1000 BDT</span> </p>
                                                            <a href="" className="checkout">Checkout</a>
                                                            <a href="" className="cart_view">Cart View</a>
                                                        </div>

                                                    </div>
                                                    

                                                </li>
                                            </ul>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
               </div>
          </section>
     );
}
 
export default TopLogoComponent;