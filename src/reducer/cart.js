
import axios from "axios";
import { useState } from "react";

import Swal from "sweetalert2"
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)


let cartsample = {
     id: "",
     name: "",
     image: "",
     qty: "",
     price: "",
}

const cartReducer = (state = false, action) => {
     if( action.type == "addToCart" ){
          
          const res = action.response

          
          let cart = JSON.parse(localStorage.getItem("cart")) || [];
          let exist = false;

          cartsample.id = res.id;
          cartsample.name = res.name;
          cartsample.image = res.image;
          cartsample.qty = 1;
          cartsample.price = res.offer_price
          ? res.offer_price
          : res.regular_price;

          cart.filter((value, index) => {
               if( exist == false ){
                    if (value.id == cartsample.id) {
                         cart[index].qty += 1;
                         exist = true;
                    }
               }
          });

          if (exist == false) {
               cart.push(cartsample);
          }

          localStorage.setItem("cart", JSON.stringify(cart));
          
          let cart_list = JSON.parse(localStorage.getItem("cart"));

          MySwal.fire({
               title : "Success",
               text : "Product Added To The Cart"
          })

          return cart_list;
          
     }
     else if( action.type == "removeCart" ){
          const id = action.product_id

        let cart = JSON.parse(localStorage.getItem("cart"));
        cart.filter((value, index) => {
            if (value.id == id) {
                cart.splice(index, 1);
                localStorage.setItem("cart", JSON.stringify(cart));
            }
        });

          return cart;
     }
     else{
          return false;
     }
};

export default cartReducer;