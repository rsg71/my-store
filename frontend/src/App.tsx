import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer/Footer';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Home from './pages/Home/Home';

function App() {


  return (
    <div>

      <NavigationBar />

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>

      <Footer />

    </div>
  );
}

export default App;
