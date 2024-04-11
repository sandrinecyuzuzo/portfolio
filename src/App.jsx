import Home from './component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './component/navigation';
import Contact from'./component/Contact';
import Service from './component/Service';
import Portfolio from './component/portfolio';
import About from './component/AboutUs'


function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Service" element={<Service />} />
        <Route path="Portfolio" element={< Portfolio/>} />
        <Route path=" Contact" element={<  Contact/>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
