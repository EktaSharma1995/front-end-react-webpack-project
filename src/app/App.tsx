import * as React from "react";
import { hot } from "react-hot-loader";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useHistory,
  Redirect,
} from "react-router-dom";
import "../assets/sass/App.css";
import { Footer } from "./components/footer/footer";
import { Home } from "./components/home/home";
import { Products } from "./components/products/products";
import { Cart } from "./components/cart/cart";
import { Login } from "./containers/login/login";
import { IdleTimerContainer } from "./containers/idleTimer/idleTimerContainer";

export default function App() {
  return (
    <Router>
      <div className="app">
        {/* <IdleTimerContainer /> */}
        {/* <Header /> */}
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/cart" component={Cart} />
          <PrivateRoute exact path="/dashboard" component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  // signout(cb) {
  //   fakeAuth.isAuthenticated = false;
  //   setTimeout(cb, 100);
  // }
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        fakeAuth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
// class App extends React.Component<{}, undefined> {
//   public render() {
//     return (
//       <Router>
//         <div className="app">
//           {/* <Header /> */}
//           <Switch>
//             <Route exact path="/" component={Login} />
//             <Route exact path="/dashboard" component={Home} />
//           </Switch>
//           <Footer />
//         </div>
//       </Router>
//     );
//   }

// declare let module: object;

// export default hot(module)(App);
