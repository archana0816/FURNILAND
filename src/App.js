import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Auth from './pages/Auth';
import Footer from './pages/Footer';
import Header from './components/Layout/Header';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route without Header and Footer */}
        <Route path='/' element={<Login />} />

        {/* Routes with Header and Footer */}
        <Route path="/Home"element={
            <div>
              <Header />
              <Home />
              <Footer />
            </div>
          }
        />
        <Route path="/About" element={
            <div>
              <Header />
              <About />
              <Footer />
            </div>
          }
        />
        <Route path="/Contact" element={
            <div>
              <Header />
              <Contact />
              <Footer />
            </div>
          }
        />
        <Route path="/Menu" element={
            <div>
              <Header />
              <Menu />
              <Footer />
            </div>
          }
        />
        <Route path="/Auth" element={
            <div>
              <Auth />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
