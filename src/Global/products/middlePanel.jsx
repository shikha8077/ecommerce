import { Filter } from '@material-ui/icons';
import axios from 'axios';
import React, { Component } from 'react'

export default class middlePanel extends Component {

        state= {
            data: [],
            categoryProduct:''
    }
    
    
  
          


  async  componentDidMount() {
      console.log("CDM",this.props.category)
        try{
            let  response  = await axios.get('http://localhost:2410/product')
            let localArray=response.data;
            if(this.props.category!==''){
          let  product= localArray.filter(item =>item.category==this.props.category)
          console.log('test again',product)
          this.setState({data:product})

            }
            else{
                console.log(response);
                this.setState({data: response.data})
            }
            
        }
        catch(err){
            console.log(err.response);
        }
        this.forceUpdate()
    }
    
    render() {
        // let product
        // if(this.state.data.length>0){
        //  product= this.state.data.filter(item =>item.category==this.props.category)
        //    console.log("filter data ",product)
        //    this.setState({data:product})
        // }
      

        console.log("main data ",this.state.data)
        
        
  

        // console.log("hllo")
        console.log('middile panel' , this.props.category)
        return (
            <div className="container">
                <div className='row col-12'>
            {this.state.data.map((product)=>(
                <div className="productsmap col col-4" key={product.id}>
                   <div className="product-image ">
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
        </div>
           
        )
    }
}
