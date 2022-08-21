import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Useful Web Dev Resources</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='about' element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
