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
  Dashboard
} from "./pages"
import Header from './components/Header';
import SubjectShow from './pages/SubjectShow';
import { AuthenticationContext, useAuthentication } from './hooks/Authentication';

function App() {

  const authentication = useAuthentication()

  const loggedIn = authentication.isLoggedIn

  const authedRoutes = [
    <Route path='/dashboard' element={<Dashboard />} />,
    <Route path='/subject' element={<SubjectShow />} />,
    <Route path='/subject-new' element={<SubjectNew />} />,
    <Route path='/subject-edit' element={<SubjectNew />} />,
    <Route path='/' element={<Dashboard />} />,
  ]

  const nonAuthedRoutes = [
    <Route path='/login' element={<Login />} />,
    <Route path='/register' element={<Register />} />,
    <Route path='/' element={<Home />} />,
  ]


  return (
    <>
      <AuthenticationContext.Provider value={authentication}>
        <Header />
        <Routes>
          {(loggedIn ? authedRoutes : nonAuthedRoutes).map(item => item)}
          <Route
            path="*"
            element={
              <div className='py-32'>
                <h2>404 Page not found</h2>
              </div>
            }
          />
        </Routes>
      </AuthenticationContext.Provider>
    </>
  );
}

export default App;
