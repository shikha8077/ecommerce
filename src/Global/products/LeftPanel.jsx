import React, { Component } from 'react';

export default class LeftPanel extends Component  {
        state= {
            data: []
    }

    componentDidMount() {
        let data=this.props.product
        console.log(data);
        this.setState({data: data})
        
    }
    

      handlefilter=(e) => {
      console.log(e.target.id);
        console.log('Click happened');
        this.props.LeftPanel(e.target.id);
      }




    render() {
        console.log("test working");
        return (
<>
<div className="container" style={{marginTop:"80px"}}>
  <p>Please select your category:</p>
  {this.state.data.data !== undefined && 
  this.state.data.data.map((item) => (
       <div className="radio">
       <input type="radio" id={item} name="radio" value="Dining" onChange={this.handlefilter}/>
       <label htmlFor="Dining">{item}</label>
       
       </div>
  )
  )
    }
  
  </div>
</>      
  )
    }
}
