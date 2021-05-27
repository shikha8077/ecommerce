import React from 'react';
import Cart from '../Global/Cart';
import {
   
    Link
  } from "react-router-dom";
  

const Navbar = () => {
    return (
      

       <nav>
           <ul className="navlinks-left">
               <li>
                   <Link to="/">ShikhaStore</Link>
               </li>
               </ul>
               <ul className="navlinks-right">
               <li>
                  <Link to="">                    
                       <span className="shoppingCart">
                       <i class="fas fa-shopping-cart"></i> Cart{Cart}
                   </span>
                   <span className="cartCount">0</span>
                   </Link>
               </li>
               
           </ul>
           
       </nav>
      
      
    )
}

export default Navbar;
