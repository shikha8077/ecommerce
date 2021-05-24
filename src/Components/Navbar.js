import React from 'react'

const Navbar = () => {
    return (
       <>
       <nav>
           <ul className="navlinks-left">
               <li>
                   <a href="#">ShikhaStore</a>
               </li>
               </ul>
               <ul className="navlinks-right">
               <li>
                   <a href="#">
                       <span className="shoppingCart">
                       <i class="fas fa-shopping-cart"></i>
                   Cart
                   </span>
                   <span className="cartCount">0</span></a>
               </li>
               
           </ul>
           
       </nav>
       </>
    )
}

export default Navbar;
