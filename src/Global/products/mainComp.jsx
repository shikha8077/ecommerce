import React, { Component } from 'react';
import MiddlePanel from "./middlePanel";
// import "bootstrap/dist/css/bootstrap.min.css";
import LeftPanel from './LeftPanel';

export default class mainComp extends Component {
    state= {

        data: ['Dining','Drawing  ','Bedroom','Study'],
        categories:'',
        // addFunc:['id','category'],


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
                <div className="col col-4"><LeftPanel product={product} LeftPanel={this.handleLeftPanel} /></div>
                <div className="col col-5"><MiddlePanel category={this.state.categories} /></div>
                <div className="col col-3"></div>
            </div>
            </div>
        )
    }
}
