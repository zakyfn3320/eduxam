import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import {
  DashboardAdmin,
  // DashboardStudent,
  Home,
  Login,
  Register,
  SubjectNew,
} from "./pages"

function App() {
  return (
    <Routes>
      <Route path='/dashboard' element={<DashboardAdmin />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/subject' element={<SubjectNew />} />
      <Route path='/' element={<Home />} />
    </Routes>
  );
}

export default App;
