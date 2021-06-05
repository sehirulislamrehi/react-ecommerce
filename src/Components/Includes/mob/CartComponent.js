const CartComponent = () => {
     return ( 
          <section className="cart-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4">
                            <img src="images/logo.png" className="img-fluid" width="80px" alt=""></img>
                        </div>
                        <div className="col-8">
                            <ul>
                                <li>
                                    <a href="">
                                        <i className="far fa-heart"></i>
                                    </a>
                                </li>
                                <li className="cart_box" id="cart_box" 
                                    >
                                    <div className="cart_count">
                                        <p>5</p>
                                    </div>
                                    <i className="fas fa-shopping-basket"></i>

                                    <div className="cart_list_mob" id="cart_list_mob">
                                        <table className="table table-striped">
                                            <tbody>
                                                
                                                <tr>
                                                    <td>
                                                        <img src="images/product-1.jpg" width="50px" alt=""></img>
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
                                <li>
                                    <a href="">
                                        <i className="fas fa-user"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
      );
}
 
export default CartComponent;