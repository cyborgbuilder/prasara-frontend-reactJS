import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home';
import Panel from './components/Panel';
import Production from './components/Production';
import SliderPage from './components/SliderPage';
import Brands from './components/Brands'
import Footer from './components/Footer'
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import News from './components/News';
import Careers from './components/Careers';
import Standards from './components/Standards';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
     <Routes>
     <Route path='/' element={<HomePage />} />
      <Route path='/news' element={<News />} />
      <Route path='/careers' element={<Careers />} />
      <Route path='/brands' element={<Brands />} />
      <Route path='/standards' element={<Standards />} />
     </Routes>
     {/* <Footer /> */}
     
     </BrowserRouter>
    </div>
  );
}

export default App;