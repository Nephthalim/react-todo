import { Switch, Route, Redirect } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import RegisterPage from './pages/RegisterPage';
import { useState, useEffect } from 'react'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

function App() {
  const [isAuthenticated, setAuthentication] = useState(false);

  const token = localStorage.getItem("token")
  useEffect(() => {
    if (token && token != "" && token != undefined) {
      setAuthentication(true);
    }
  })
  const toaster = {
    success: () => toast.success('🎉 You have successfuly logged in.', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }),
    error: (msg) => toast.error(msg, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }),
  }

  return (
    <>
      <Switch>
        <Route path='/' exact>
          {
            !isAuthenticated ?
              <LandingPage setAuthentication={setAuthentication} toaster={toaster} />
              : <DashboardPage setAuthentication={setAuthentication} />
          }
        </Route>
        <Route path='/register' exact>

          {!isAuthenticated ?
            <RegisterPage setAuthentication={setAuthentication} /> :
            <Redirect to='/' />
          }


        </Route>

      </Switch>
      <ToastContainer
        position="bottom-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
