import logo from './logo.svg';
import './App.css';
import AddStudent from './Components/AddStudent';
import SearchStudent from './Components/SearchStudent';
import ViewAllStudents from './Components/ViewAllStudents';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<AddStudent/>}/>
      <Route  path='/SearchStudent' element={<SearchStudent/>}/>
      <Route  path='/ViewAllStudents' element={<ViewAllStudents/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
