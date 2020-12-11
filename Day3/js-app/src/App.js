// import logo from './logo.svg';
import logo from './bootstrap-logo.svg';
import './App.css';
import HeaderHOC from './HeaderHOC';
import HeaderHOCFunc from './HeaderHOCFunc'
import SimpleComp from './SimpleComp';
import ChildProps from './ChildProps';

import { Route, Switch, Link } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import ChildRoute from './ChildRoute';
import React from 'react';

function App() {
  // const Header = HeaderHOC(SimpleComp, 'Harman');
  // const Header = HeaderHOCFunc(SimpleComp, 'HCS');

  return (
    <div className="container">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Header /> */}
      {/* <SimpleComp>Proloy</SimpleComp>

      <ChildProps color="blue">
        <SimpleComp txt="Harman" />
        <ChildProps color="red">
          <SimpleComp txt="DTS" />
        </ChildProps>
      </ChildProps> */}

      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <React.Fragment>
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="" width="30" height="24" />
            </Link>

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/about?id=1&name=Proloy">About 2</Link>
            <Link to="/child">Child</Link>
          </React.Fragment>
          {/* <Link to="/" className="navbar-brand">
            <img src={logo} alt="" width="30" height="24" />
          </Link>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/about?id=1&name=Proloy">About 2</Link>
          <Link to="/child">Child</Link> */}
          {/* <Link to="/services">Services</Link> */}
          {/* <Link to="/products">Products</Link>
          <Link to="/product/sound">Sound</Link> */}
        </div>
      </nav>

      <Switch>
        {/* <Route exact path="/"><Page1 title="Home Page" /></Route>
        <Route exact path="/about"><Page2 /></Route> */}
        <Route exact path="/" component={Page1} />
        <Route exact path="/about" component={Page2} />
        <Route exact path="/child" component={ChildRoute} />
        {/* <Route path="/:title" component={Page3} />
        <Route path="/product/:title" component={Page2} /> */}
      </Switch>
    </div>
  );
}

export default App;
