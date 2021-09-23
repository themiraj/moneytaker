import logo from './logo.svg';
import './styles/output.css'
import Login from './users/login';
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/login">
              <div className="min-h-full min-h-screen bg-blue-100 flex">
                  <Login/>
              </div>
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
            <Provider store={store}>
              <Home />
            </Provider>,
            </Route>
          </Switch>
        </div>
      </Router>
        
    </div>
  );
}

export default App;
