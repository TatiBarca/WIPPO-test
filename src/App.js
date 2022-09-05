import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Brands } from './components/Brands/Brands';
import { Connection } from './components/Connection/Connection';
import { Customers } from './components/Custumers/Custumers';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { Nav } from './components/Nav/Nav';
import { News } from './components/News/News';
import { Projects } from './components/Projects/Projects';
import { Section } from './components/Section/Section';
import { Services } from './components/Services/Services';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav />
      <div>
        <Routes>
        {/* <Route path='/home' element={<Home />} />
        <Route path='/about us' element={<AboutUs />} />
        <Route path='/blog' element={<News />} />
        <Route path='/services' element={<Services />} /> */}
      </Routes>
      </div>
      <Section />
      <Brands />
      <Services />
      <Projects />
      <Customers />
      <News />
      <Connection />
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
