import './App.css';
// import './output.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Content from './Components/Content';
import Header from './Components/Header';
import Trackgoods from './Components/Trackgoods';
import MapTrack from './Components/MapTrack';
import FindRetailers from './Components/FindRetailers';

function App() {
  return (
    <BrowserRouter>
     <div className="App">
    <Header/>
    <Routes>
      <Route path='/' element={<Content />} />
      <Route path='/trackgoods' element={<Trackgoods />} />
      <Route path='/trackgoods/location' element={<MapTrack />} />
      <Route path='/retailers' element={<FindRetailers />} />
    </Routes>
    </div>
    </BrowserRouter>
   
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)
