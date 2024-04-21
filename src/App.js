import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavbarMenu from './components/navbar';
import UserData from './components/pages/user';
import About from './components/pages/about';

function App() {
  return (
    <div className="App">
      <Router>
      <NavbarMenu />
        <Routes>
          <Route path='/' exact element={<UserData />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
