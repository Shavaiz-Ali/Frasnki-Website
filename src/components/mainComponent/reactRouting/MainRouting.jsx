import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from "../Home";
import About2 from '../../pages/About2';
import Contact from '../../pages/Contact';
import Services from '../../pages/Services';
import Enroll from "../../pages/Enroll";
import Events from "../../pages/Events";
function MainRouting() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About2} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/Services' component={Services} />
        <Route exact path='/events' component={Events} />
        <Route exact path='/enroll' component={Enroll} />
        <Redirect to='/' />
      </Switch>
    </div>
  )
}

export default MainRouting
