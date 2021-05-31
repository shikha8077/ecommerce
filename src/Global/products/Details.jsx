import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import mainComp from './mainComp';
import middlePanel from './middlePanel'

export default class Details extends Component {
    state= {
        details: this.props.details
}
    render() {
        let details= this.props.details
        let userRole=this.props.data
        console.log("userole-2>>",userRole);

        console.log('detai page>>>>>',this.props.details)
        return (
            <div className="conatiner" style={{marginTop:"100px",marginLeft:"70px"}}>
                

                <p>   {userRole.role==='admin'?<button>Add to cart</button> :""} </p>
                          {/* <button>Add New Products</button>
                         <button>Remove Products</button> */}
                                <h3> product details section</h3>
                                <img src={details.img}/>
                                <h3>{details.title}</h3>
                                <p>{details.desc}</p>
                               
                         <p>   {userRole.role==='customer'?<button>Add to cart</button>:""} </p>


            </div>
        )
    }
}
