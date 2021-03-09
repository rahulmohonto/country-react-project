import './App.css';
import Country from './components/Country/Country';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CountryDetails from './components/CountryDetails/CountryDetails';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
  return (
    <Router className="App text-center">
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Country</Link>
            </li>
            <li>
              <Link to="/country">Countries</Link>
            </li>
            <li>
              <Link to="/details/:CountryName">Country Details</Link>
            </li>
          </ul>
        </nav> */}

        <Switch>
          <Route path="/country">
            <Country></Country>
          </Route>
          <Route path="/name/:name">
            <CountryDetails></CountryDetails>
          </Route>
          <Route path="/">
            <Country ></Country>
          </Route>
          <Route path="*">
            <NoMatch ></NoMatch>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
