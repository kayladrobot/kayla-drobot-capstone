import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage"
import Creatives from "./pages/Creative"
import Navigation from "./components/Navigation/Navigation"
import Footer from "./components/Footer/Footer"
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/creatives" element={<Creatives />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
