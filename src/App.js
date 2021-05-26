
import React, {Component} from 'react'
import './App.css';
import Navbar from './Components/Navbar';
// import Banner from './Components/Banner';
import Products from './Global/products/mainComp'
import { Router,Switch,Route ,Redirect} from 'react-router-dom';

import { createBrowserHistory } from 'history';

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
       </Switch>
       </Router>
       <Redirect to ='/product' />
       </>
       {/* <Route path="/cart" exact component={Cart}></Route> */}
     

    </div>
    </>

  )
}
}

export default App
