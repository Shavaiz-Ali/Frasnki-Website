import React from 'react'
import Web from "../../pages/Courses-pages/Web";
import Gis from "../../pages/Courses-pages/Gis";
import Films from "../../pages/Courses-pages/Films";
import Graphic from "../../pages/Courses-pages/Graphic";
import Uiuxdesign from '../../pages/Courses-pages/Uiuxdesign';
import Amazon from "../../pages/Courses-pages/Amazon"; 
import { Switch, Route, Redirect } from 'react-router-dom'
function PageRouting() {
  return (
    <div>
      
      <Switch>
        <Route exact path='/web' component={Web} />
        <Route exact path='/gis' component={Gis} />
        <Route exact path='/films' component={Films} />
        <Route exact path='/graphic' component={Graphic} />
        <Route exact path='/uiux' component={Uiuxdesign} />
        <Route exact path='/amazon' component={Amazon} />
        <Redirect to='/' />
      </Switch>
    </div>
  )
}

export default PageRouting
