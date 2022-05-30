import { Route, Routes } from 'react-router-dom';
import './App.css';
import BannerAd from './Components/Add/BannerAd';
import Native from './Components/Add/Native';
import Popunder from './Components/Add/Popunder';
import Skim from './Components/Add/Skim';
import Home from './Components/Home/Home';
import Navebar from './Components/Navebar/Navebar';

function App() {
  return (
    <div className="App">
        <Navebar></Navebar>
        <Routes>
        <Route path="/" element={<Home />}>
        <Route index element={<Popunder></Popunder>}></Route>
        <Route path="BannerAd" element={<BannerAd></BannerAd>}></Route>
        <Route path="Native" element={<Native></Native>}></Route>
        <Route path="Skim" element={<Skim></Skim>}></Route>
        </Route>
        <Route path="about" element={''} />
      </Routes>
    </div>
  );
}

export default App;
