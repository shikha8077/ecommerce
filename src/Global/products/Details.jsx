import React, { Component } from 'react';
import mainComp from './mainComp';
import middlePanel from './middlePanel'

export default class Details extends Component {
    state= {
        details: this.props.details
}
    render() {
        let details= this.props.details

        console.log('detai page>>>>>',this.props.details)
        return (
            <div className="conatiner" style={{marginTop:"100px",marginLeft:"70px"}}>
                
                                <h3> product details section</h3>
                                <img src={details.img}/>
                                <h3>{details.title}</h3>
                                <p>{details.desc}</p>

            </div>
        )
    }
}
