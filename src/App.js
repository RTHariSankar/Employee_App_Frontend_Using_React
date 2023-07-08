import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Employeeform from './components/Employeeform';
import Home from './components/Home';

function App() {
  return (
    <div>
      <BrowserRouter basename='/employee_app_frontend_using_react'>
        <Routes basename='/employee_app_frontend_using_react'>
          <Route basename='/employee_app_frontend_using_react' path='/employee_app_frontend_using_react' element={<Home/>}/>
          <Route basename='/employee_app_frontend_using_react' path='/employee_app_frontend_using_react' element={<Employeeform/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
