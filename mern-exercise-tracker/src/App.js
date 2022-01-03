import React from 'react';
import {BrowserRouter as Router, Route, useLocation, Switch, BrowserRouter} from 'react-router-dom';
import NavbarComponent from './components/navbar.component';
import LoginandSignUp from './components/loginandSignUp';
import HomePageComponent from './components/homePageComponent';


function App() {

  return (
  /* render={(props) => <PropsPage {...props} title={`Props through render`}*/

    <>
      <BrowserRouter>
        {window.location.pathname === '/' ? null : <NavbarComponent />}

        <Switch>
          <Router>

            <br />
            <Route exact path={['/', '/authentication']} component={LoginandSignUp} />
            <Route path="/homePage" exact component={HomePageComponent} />

          </Router>
        </Switch>
      </BrowserRouter>
    </>

  );
}

export default App;
