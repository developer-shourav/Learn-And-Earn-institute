
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';

function App() {
  return (
    <div className = ''>
         <Router>
           {/* -----Web header------- */}
        <Header> </Header>
            <Switch>
          {/* -----Default Route------- */}
          <Route exact path="/">
            <Home></Home>
          </Route>
          {/* -----Home route------- */}
              <Route exact path= "/home">
                <Home></Home>
              </Route>
          {/* -----Our services Route------- */}
          <Route exact path="/services">
            <Services></Services>
          </Route>
          {/* -----Aboute section route------- */}
          <Route exact path="/about">
            <About></About>
          </Route>
          {/* -----Contact Route------- */}
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          {/* -----Rout which is not match with path ------- */}
          <Route  path="*">
            <NotFound> </NotFound>
          </Route>
            </Switch>
         </Router>
      {/* -----Web Footer------- */}
         <Footer></Footer>
    </div>
  );
}

export default App;
