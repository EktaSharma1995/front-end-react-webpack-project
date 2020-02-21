// import * as React from "react";
// import { Redirect, Route } from "react-router-dom";

// import { AuthenticationService } from "../Services/authentication.service";

// export const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props => {
//       const currentUser = AuthenticationService.currentUserValue;
//       if (!currentUser) {
//         // not logged in so redirect to login page with the return url
//         return (
//           <Redirect
//             to={{ pathname: "/login", state: { from: props.location } }}
//           />
//         );
//       }

//       // authorised so return component
//       return <Component {...props} />;
//     }}
//   />
// );
