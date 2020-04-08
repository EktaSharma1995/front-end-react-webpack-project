import * as React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import '../assets/sass/App.css';
import { Footer } from './components/Footer/footer';
import { Home } from './components/Home/home';
import { Login } from './containers/Login/login';

class App extends React.Component<{}, undefined> {
  public render() {
    return (
      <Router>
        <div className="app">
          {/* <Header /> */}
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={Home} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

declare let module: object;

export default hot(module)(App);
