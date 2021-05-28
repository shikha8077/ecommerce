
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

 newHistory : createBrowserHistory()
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
  
       <Route exact path="/product"  component={Products} />
       <Route exact path="/login" component={Login} />
       </Switch>
       <Redirect to ='/login' />

       </Router>
       </>
       {/* <Route path="/cart" exact component={Cart}></Route> */}
     

    </div>
    </>

  )
}
}

export default App
