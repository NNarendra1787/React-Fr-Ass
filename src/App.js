// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Routers/Home';
import Student from './Routers/Student';
import Contact from './Routers/Contact';
function App() {
  return (
    <div>
      

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='/Student' element={<Student />}/>
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
