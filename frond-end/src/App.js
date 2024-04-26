import './App.css';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Landing from './pages/landing/Landing.jsx';
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
