import React,{useContext} from 'react';
import {ProductContext} from '../Global/ProductContext'

const Products = () => {

    const {product} = useContext(ProductContext);
    // console.log(data);



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
                        {/* <div className='product-price'>
                            {product.desc}
                        </div> */}
                    </div>
                    </div>
            ))}
            
        </div>
    )
}

export default Products;
