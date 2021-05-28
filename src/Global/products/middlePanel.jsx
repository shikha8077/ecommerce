import axios from 'axios';
import React, { Component } from 'react'

export default class middlePanel extends Component {

        state= {
            data: [],
            categoryProduct:'',
            mainData:[],
            productDeatils:{}
    }
 async  componentDidMount() {
      console.log("CDM",this.props.category)
        try{
            let  response  = await axios.get('http://localhost:2410/product')    
             this.setState({data: response.data,mainData:response.data})
            
        }
        catch(err){
            console.log(err.response);
        }
    }

   componentWillUpdate(nextProps, nextState) {
      let mainData = nextState.mainData; 
         
      console.log("nextprops",nextProps)
      console.log("nextstate",nextState)
    if(nextProps.category!==''){

      nextState.data= mainData.filter(item=>item.category===nextProps.category)
      console.log('inside CWU',nextState.data)
      

     

    }
    else{
        nextState.data=mainData
    }
   }
   addFunc = (index) =>{
       console.log('add to cart',index)
       console.log('cartdata',this.state.mainData[index])

      let addToCartPro = this.state.mainData.find(item => item.prodCode === index)
      console.log('add to cart product',addToCartPro)



      this.props.productDetails(addToCartPro)
    //   this.setState({productDeatils:addToCartPro})
        
     }
     
   
    
    
    render() {
      

        console.log("main data ",this.state.data)
        
        
  

        // console.log("hllo")
        console.log('middile panel' , this.props.category)
        return (
            <div className="container">
                <div className='row col-12'>
            {this.state.data.map((product,index)=>(
                <div className="productsmap col col-4" key={product.prodCode} onClick={() => this.addFunc(product.prodCode)}>
                
                   <div className="product-image ">
                       <img src={product.img}/>
                    </div>
                    <div className="product-details">
                        <div className="product-name">
                            {product.title}
                        </div>
                      {/* <div className="add_to_cart">
                          <button onClick={() => this.addFunc(product.id)}>Add to Cart</button>
                          </div> */}
                    </div>
                    </div>
            ))}
            
        </div>
        </div>
           
        )
    }
}
