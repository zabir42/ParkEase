import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './page/Dashboard.jsx';
import LoginPage from './page/LoginPage.jsx';
import Signup from './page/Signup.jsx';
import ParkingProvider from './provider/ParkingProvider.jsx';
import PrivateRoutes from './routes/PrivateRoute.jsx';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    const body = document.querySelector('body');
    if (darkMode) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`h-screen ${darkMode ? 'bg-dark text-white' : ''}`}>
      <button onClick={handleToggleDarkMode} className="fixed top-0 right-0 m-4 bg-blue-600 px-4 py-2 rounded dark:text-white">
        {darkMode ? 'light' : 'dark'}
      </button>
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
    </div>
  );
};

export default App;
