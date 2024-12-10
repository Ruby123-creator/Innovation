import React from 'react'
import { Route } from 'react-router-dom';
const PrivateRoute = (props) => {
    const { component: Component, ...rest } = props;
  return (
    <Route
    {...rest}
    element={
      <Component {...rest} />
       
    }
  />
  )
}

