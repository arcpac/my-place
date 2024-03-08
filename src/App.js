import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Users from './users/pages/Users';
import { Redirect } from 'react-router-dom/cjs/react-router-dom';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './users/components/Navigation/MainNavigation';
import PlaceList from './places/components/PlaceList';
import UserPlaces from './places/pages/UserPlaces';


const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact={true}>
            Hello
          </Route>
          <Route path="/users" exact={true}>
            <Users />
          </Route>
          <Route path="/:userId/places" exact={true}>
            <UserPlaces />
          </Route>
          <Route path="/places/new" exact={true}>
            <NewPlace />
          </Route>
          <Redirect path="/no-page" />
        </ Switch>
      </main>
    </Router>
  );
}

export default App;
