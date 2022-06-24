import './App.css';
import { Route, Routes } from 'react-router-dom';

import {
  // DashboardAdmin,
  DashboardStudent,
  // DashboardStudent,
  Home,
  Login,
  Register,
  SubjectNew,
} from "./pages"
import Header from './components/Header';
import SubjectShow from './pages/SubjectShow';
import { AuthenticationContext, useAuthentication } from './hooks/Authentication';

function App() {

  const authentication = useAuthentication()

  return (
    <>
      <AuthenticationContext.Provider value={authentication}>
        <Header />
        <Routes>
          <Route path='/dashboard' element={<DashboardStudent />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/subject' element={<SubjectShow />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </AuthenticationContext.Provider>
    </>
  );
}

export default App;
