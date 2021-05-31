import axios from 'axios';
import React, { Component } from 'react'

export default class Login extends Component {
     state = {
        email: "",
        password: ""
      };
         

    //   onSubmit =(event)=>{
    //       event.preventDefault();
    //       this.setState()
    //   }
    
  
InputEvent=(event)=>{

    console.log(event.target.id)
    console.log(event.target.value)
    this.setState({[event.target.id]:event.target.value})
}
componentDidMount(){}
    handleSubmit = async(event) => {
        event.preventDefault();
        console.log('email test',this.state.email)
        console.log('password test',this.state.password)

        let submit = {email:this.state.email,password:this.state.password}

        try{
            let response = await axios.post("http://localhost:2410/login",submit) 
            console.log('user response test',response)
            this.props.responses(response.data)

            this.props.history.push("/product")
        //  window.location.reload(false) 
        this.componentDidMount()
        }

        catch(err){
        console.log(err.response)
        }
      }
    


    render() {
        return (
            <div>
            <h3> Hello </h3>
                <form onSubmit={this.handleSubmit} style={{marginTop:"80px",marginLeft:"300px"}}>
                    <input type="text" id='email' value={this.state.email} onChange={this.InputEvent}/>
                    <label>Email</label><br />
                    <input type="password" id="password" value={this.state.passwords} onChange={this.InputEvent}/>
                    <label>password</label><br/>
                    <button>Signin</button><br/>
                </form>
            </div>
        )
    }
}
