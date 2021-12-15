import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import React from 'react';
import PublicRoute from './routes/PublicRoute'; 
import PrivateRoute from './routes/PrivateRoute';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Header from './components/Header';
import {AuthContext} from './context/AuthContext';
function App() {

  const {isAuthenticated} = React.useContext(AuthContext)   

  const isAuth = isAuthenticated();

  return (
    <Router>
      <Header />

       <Switch>
         
          <PublicRoute
            path="/login"
            isAuthenticated={isAuth}
          >
            <Login />
          </PublicRoute>
          
          <PublicRoute
            path="/register"
            isAuthenticated={isAuth}
          >
            <Register />
          </PublicRoute>
          
          <PrivateRoute
            path="/"
            isAuthenticated={isAuth}
          > 
            <Home />
            
            </PrivateRoute >
        </Switch>


    </Router>
    
  );
}

export default App;
