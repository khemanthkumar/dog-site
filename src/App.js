import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Nav from './Nav/Nav';
import Slider from "./Slider"
import Login from './Login/log';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            <div className="im1">
         
              <Login />
                         
             
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
