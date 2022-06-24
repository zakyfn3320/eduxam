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

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/dashboard' element={<DashboardStudent />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/subject' element={<SubjectNew />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
