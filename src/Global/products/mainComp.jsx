import React, { Component } from 'react';
import MiddlePanel from "./middlePanel";
// import "bootstrap/dist/css/bootstrap.min.css";
import LeftPanel from './LeftPanel';
import Details from './Details';

export default class mainComp extends Component {
    state= {

        data: ['Dining','Drawing','Bedroom','Study'],
        categories:'',
        // addFunc:['id','category'],
        // user:['img','desc','titles']
        details:{}


}
productDetails=(details)=>{
    console.log('deatils main component>>>>>>', details);
    this.setState({details})
    }
    


   radioStructure(data){
       let filterdata = {
           data:data ,
           selected:'',
       }
       return filterdata;
 }
  
 handleLeftPanel=(product)=> {
    //  console.log("left panel data",product)
    if (product){
     this.setState({categories:product})
    }
  }

    render() {
        let product = this.radioStructure(this.state.data)


        console.log('middle panel is working')
        return (
            <div>
                <div className='row col-12'>
                <div className=" col-2"><LeftPanel product={product} LeftPanel={this.handleLeftPanel} /></div>
                <div className=" col-7"><MiddlePanel category={this.state.categories} 
                productDetails={this.productDetails}/></div>
                <div className=" col-3"><Details details={this.state.details}/></div>
            </div>
            </div>
        )
    }
}
