import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//COMPONENTS
import Home from './home';
import Menu from './menu';

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/menu" component={Menu} />
      </div>
    </BrowserRouter>
  )
}

export default Routes;
