import './App.css';
import { Route, Routes } from 'react-router-dom';

import {
  // DashboardAdmin,
  // DashboardStudent,
  // DashboardStudent,
  Home,
  Login,
  Register,
  SubjectNew,
  Dashboard,
  Lost
} from "./pages"
import Header from './components/Header';
import SubjectShow from './pages/SubjectShow';
import { AuthenticationContext, useAuthentication } from './hooks/Authentication';
import { Fragment } from 'react';

function App() {

  const authentication = useAuthentication()

  const loggedIn = authentication.isLoggedIn

  const authedRoutes = [
    <Route path='/dashboard' element={<Dashboard />} />,
    <Route path='/subject' element={<SubjectShow />} />,
    <Route path='/subject-new' element={<SubjectNew />} />,
    <Route path='/subject-edit' element={<SubjectNew />} />,
  ]

  const nonAuthedRoutes = [
    <Route path='/login' element={<Login />} />,
    <Route path='/register' element={<Register />} />,
  ]


  return (
    <>
      <AuthenticationContext.Provider value={authentication}>
        <Header />
        <Routes>
          {(loggedIn ? authedRoutes : nonAuthedRoutes).map((item, index) => <Fragment key={index}>{item}</Fragment>)}
          <Route path='/' element={<Home />} />,
          <Route
            path="*"
            element={<Lost />}
          />
        </Routes>
      </AuthenticationContext.Provider>
    </>
  );
}

export default App;
