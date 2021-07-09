import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from '../pages/Home'
import Ifa from '../pages/Ifa'
import Saiba from '../pages/Saiba'
import Autora from '../pages/Autora'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

const Routes = () => {
    return(
        <BrowserRouter>
        <Menu/>
          <Switch>
              <Route exact path='/'component={Home}/>
              <Route path= '/ifa' component={Ifa}/>
              <Route path= '/saiba' component={Saiba}/>
              <Route path='/autora' component={Autora}/>
          </Switch>
            <Footer/>
        </BrowserRouter>
    )
}


export default Routes 