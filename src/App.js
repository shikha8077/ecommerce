
import React, {Component} from 'react'
import './App.css';
import Navbar from './Components/Navbar';
// import Banner from './Components/Banner';
import Products from './Global/products/mainComp'
import { Router,Switch,Route ,Redirect} from 'react-router-dom';

import { createBrowserHistory } from 'history';
import Login from './Components/Login';
class App extends Component {
  state= {

 newHistory : createBrowserHistory(),
 data:{}
  }

  handleresponse=(data)=>{
    console.log("useRoleTest>>>>>>>",data)
    this.setState({data})

  }



  render(){
  console.log('app is rendering');
  return (
    <>

    <div>
      <Navbar/>
   
      <>
       <Router  history={this.state.newHistory}>

       <Switch>
       <Route
          path="/product"
          exact
          render={(props) => (
            <Products
              {...props}
              key={Math.floor(Math.random() * 10)}
              data={this.state.data}            />
            
          )}
          />
  
       {/* <Route exact path="/product"  component={Products} data={this.state.data}/> */}
       {/* <Route exact path="/login" component={Login} responses= {this.handleresponse} /> */}
       <Route
          path="/login"
          exact
          render={(props) => (
            <Login
              {...props}
              key={Math.floor(Math.random() * 10)}
              responses={this.handleresponse}
            />
            
          )}
          />
       </Switch>
       {/* <Redirect to ='/login' /> */}

       </Router>

       </>
       {/* <Route path="/cart" exact component={Cart}></Route> */}
     

    </div>
    </>

  )
}
}

export default App
