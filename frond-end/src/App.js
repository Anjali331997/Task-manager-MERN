import './App.css';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Landing from './pages/landing/Landing.jsx';
import { Routes, Route } from 'react-router-dom'
import TaskDetails from './components/TaskDetails/TaskDetails.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/:taskid' element={<TaskDetails/>} />
      </Routes>
    </>
  );
}

export default App;
