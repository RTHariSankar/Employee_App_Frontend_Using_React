import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Employeeform from './components/Employeeform';
import Home from './components/Home';

function App() {
  return (
    <div>
      <BrowserRouter basename='/employee_app_frontend_using_react'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/employee_form' element={<Employeeform/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
