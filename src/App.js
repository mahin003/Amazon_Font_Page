
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    //BEM
  <Router> 
  <div className="App">
     <Switch>
     <Route path="/checkout">
       <Header></Header>
        <Checkout></Checkout>
      </Route>

       <Route path="/">
       <Header></Header>
        <Home></Home>
      </Route>
    </Switch>
    </div>
    </Router>

  );
}

export default App;
