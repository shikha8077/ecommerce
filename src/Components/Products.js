import React,{useContext, useState} from 'react';
import {ProductContext} from '../Global/ProductContext';
import CartContext from '../Global/CartContext';

const Products = () => {

    const product = useState(ProductContext);
    console.log("test",product);
    console.log('test2',ProductContext);
    const data= useContext(CartContext)
    console.log("Data Variable",data);



    return (
        <div className="products">
            {product.map((product)=>(
                <div className="productsmap" key={product.id}>
                   <div className="product-image">
                       <img src={product.img}/>
                    </div>
                    <div className="product-details">
                        <div className="product-name">
                            {product.title}
                        </div>
                      <div className="add_to_cart">Add to Cart</div>
                    </div>
                    </div>
            ))}
            
        </div>
    )
}

export default Products;
