import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Menu from './Components/Menu/Menu.js'
import Location from './Components/Location/Location.js'
import Catering from './Components/Catering/Catering.js'
import OrderTakeout from './Components/OrderTakeout/OrderTakeout.js'
import Home from './Components/Home/Home.js'

export default(
  <Switch>
    <Route path='/Menu' component={Menu}/>
    <Route path='/Location' component={Location}/>
    <Route path='/Catering' component={Catering}/>
    <Route path='/Takeout' component={OrderTakeout}/>
    <Route exact path='/' component={Home}/>
  </Switch>
)