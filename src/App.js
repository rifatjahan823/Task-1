import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navebar from './Components/Navebar/Navebar';

function App() {
  return (
    <div className="App">
        <Navebar></Navebar>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={''} />
      </Routes>
    </div>
  );
}

export default App;
