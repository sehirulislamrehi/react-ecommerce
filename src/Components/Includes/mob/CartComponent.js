import { useState } from "react";
import { Link } from "react-router-dom";

import Swal from "sweetalert2"
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const CartComponent = () => {

    const [cart_length, set_cart_length ] = useState()

    const remove_cart = (e) => {
        const id = e.target.id

        let cart = JSON.parse(localStorage.getItem("cart"));
        cart.filter((value, index) => {
            if (value.id == id) {
                cart.splice(index, 1);
                localStorage.setItem("cart", JSON.stringify(cart));
            }
        });

        
        set_cart_length(JSON.parse(localStorage.getItem("cart")).length)
        

        MySwal.fire({
            title : "Success",
            text : "Product Removed From The Cart"
        })

    }

     return ( 
          <section className="cart-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4">
                            <Link to="/">
                            <img src="/images/logo.png" className="img-fluid" width="80px" alt=""></img>
                            </Link>
                        </div>
                        <div className="col-8">
                            <ul>
                                { JSON.parse(localStorage.getItem("cart")) &&
                                <li className="cart_box" id="cart_box" 
                                    >
                                    {
                                        JSON.parse(localStorage.getItem("cart")).length != 0 &&
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
                                        JSON.parse(localStorage.getItem("cart")).length != 0 &&
                                    <div className="cart_list_mob" id="cart_list_mob">
                                        <table className="table table-striped">
                                            <tbody>
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
                                                            <button className="remove_cart"  onClick={remove_cart}>
                                                                <i className="fas fa-times" id={value.id}></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))
                                            }

                                            </tbody>
                                        </table>

                                        <div className="cart_detail">
                                        <Link to="/checkout" className="checkout">Checkout</Link>
                                        </div>

                                    </div>
                                    }
                                </li>
                                }

                                    { localStorage.getItem("authenticated") ?
                                    ""
                                    :
                                    <li>
                                        <Link to="/login">
                                                <i className="fas fa-user"></i>
                                            login
                                        </Link>
                                    </li>                                    
                                    }

                                { localStorage.getItem("authenticated") && 
                                <li>
                                    <Link to="/profile">
                                        <i className="fas fa-user"></i>
                                    </Link>
                                </li>
                                }
                                <li>
                                    <Link to="/shop">
                                        <i className="fas fa-shopping-bag"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
      );
}
 
export default CartComponent;