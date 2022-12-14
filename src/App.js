import './App.css';
import NavbarComp from './components/NavbarComp.js';
import FooterComp from './components/FooterComp.js';
import Home from './components/Home.js';
import Menu from './components/Menu.js';
import Contact from './components/Contact.js';
import About from './components/About.js';

import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComp className="yellow" />  {/* Navbar */}
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/Home'>
            <Home />
          </Route>
          <Route path='/Menu'>
            <Menu />
          </Route>
          <Route path='/Contact'>
            <Contact />
          </Route>
          <Route path='/About'>
            <About />
          </Route>
        </Switch>

        <FooterComp />  {/* Footer */}
      </div>
    </Router>
  );
}

export default App;
