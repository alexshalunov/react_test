import React from 'react'

import Home from './components/Home'
import BidMaster from './containers/BidMaster/BidMaster'

import './App.scss';
import { Switch, Route } from 'react-router-dom'

// import { changeFirstName, changeSecondName } from './store/user/actions'

class App extends React.Component{
  render(){
    
    // const dispatch = this.props.dispatch;
    // const { firstName, secondName } = this.props

    // console.log('App props: ', this.props)
    
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/bids' component={BidMaster}/>
      </Switch>
    );
  }
}

export default App;
