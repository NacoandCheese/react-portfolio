import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {

  return (
    // CAN ONLY RETURN ONE HTML TAG. 
    // use className for html tags instead of class
    <Router>
      {/* Header is in all pages! */}
      <Header />

      <Routes>
        {/* Creates route for each page in the application */}
          <Route exact path="/" element={<About />} />
          <Route exact path="/Projects" element={<Projects />} />
          <Route exact path="/Contact" element={<Contact />} />



      </Routes>
      
      <Footer />
      
    </Router>
  );
}

export default App;
