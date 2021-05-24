import React, { createContext ,useState,useEffect} from 'react';
import product1 from "../Global/products/products2.jpeg";
import product2 from '../Global/products/products3.jpeg';
import product3 from '../Global/products/products4.jpeg';
import product4 from '../Global/products/products5.jpeg';
import product5 from '../Global/products/products1.jpeg';
import product6 from '../Global/products/boxing.jpeg';
import axios from 'axios';


export const ProductContext = createContext();


const ProductContextProvider = (props) => {

    useEffect(async() => {
    try
    {
        let res=await axios.get('http://localhost:2410/product')
          console.log(res);
          setProduct(res.data)

}

 catch(err){
     console.log(err.res);
 }        
    }, [])

    const [product,setProduct] = useState(
        []
    );




    return (
        <ProductContext.Provider value={{product : [...product]}}>
          {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;
