import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './page/Dashboard.jsx';
import LoginPage from './page/LoginPage.jsx';
import Signup from './page/Signup.jsx';
import ParkingProvider from './provider/ParkingProvider.jsx';
import PrivateRoutes from './routes/PrivateRoute.jsx';

const App = () => {

  return (
    <ParkingProvider>

      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<Dashboard />} />
            <Route path="/" element={<Dashboard />} exact />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </ParkingProvider>
  );
};

export default App;
