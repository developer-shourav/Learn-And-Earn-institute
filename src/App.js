
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';

function App() {
  return (
    <div className = ''>
         <Router>
        <Header> </Header>
            <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

              <Route exact path= "/home">
                <Home></Home>
              </Route>

          <Route exact path="/services">
            <Services></Services>
          </Route>

          <Route exact path="/about">
            <About></About>
          </Route>

          <Route exact path="/contact">
            <Contact></Contact>
          </Route>

          <Route exact path="/login">
            <Login></Login>
          </Route>

          <Route  path="*">
            <NotFound> </NotFound>
          </Route>
            </Switch>
         </Router>

         {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
