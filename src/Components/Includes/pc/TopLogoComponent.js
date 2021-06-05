import { useState } from "react";
import { Link } from "react-router-dom";
import GetCategoryData from "../../../Functionality/GetCategoryData";

import Swal from "sweetalert2"
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const TopLogoComponent = () => {

    const { data:category } = GetCategoryData("https://vuebackend.sehirulislamrehi.com/api/category");
    
    const remove_cart = (e) => {
        const id = e.target.id

        let cart = JSON.parse(localStorage.getItem("cart"));
        cart.filter((value, index) => {
            if (value.id == id) {
                cart.splice(index, 1);
                localStorage.setItem("cart", JSON.stringify(cart));
            }
        });

        if( JSON.parse(localStorage.getItem("cart")) == 0 ){
            localStorage.removeItem("cart")
        }
        MySwal.fire({
            title : "Success",
            text : "Product Removed From The Cart"
       })
    }
    
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
                                                    {
                                                        JSON.parse(localStorage.getItem("cart")) &&
                                                        <div className="cart_count">
                                                            <p>
                                                            {
                                                                JSON.parse(localStorage.getItem("cart")).length
                                                            }
                                                            </p>
                                                        </div>
                                                    }
                                                    
                                                    <i className="fas fa-shopping-basket"></i>

                                                    {
                                                        JSON.parse(localStorage.getItem("cart")) &&
                                                        <div className="cart_list" id="cart_list">
                                                            <table className="table table-striped">
                                                                
                                                                <tbody id="cart_list_body">
                                                                    {
                                                                        JSON.parse(localStorage.getItem("cart")).map( (value, index)  => (
                                                                            <tr>
                                                                                <td>
                                                                                    <img src={value.image} width="50px" alt=""></img>
                                                                                </td>
                                                                                <td>
                                                                                    <a href="#">{value.name}</a>
                                                                                    <p>{value.qty}x {value.price}</p>
                                                                                </td>
                                                                                <td>
                                                                                    <button className="remove_cart" onClick={remove_cart} >
                                                                                        <i className="fas fa-times" id={value.id}></i>
                                                                                    </button>
                                                                                </td>
                                                                            </tr>
                                                                        ))
                                                                    }
                                                                </tbody>
                                                            </table>

                                                            <div className="cart_detail">
                                                                
                                                                <a href="" className="checkout">Checkout</a>
                                                                <a href="" className="cart_view">Cart View</a>
                                                            </div>

                                                        </div>
                                                    }
                                                    
                                                    

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