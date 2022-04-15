import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Welcome from './Views/Welcome/Welcome';
import Dashboard from './Views/Dashboard/Dashboard';
import Impressum from "./Views/Impressum/Impressum";

import './Globals.css';
import './App.css';

const App:React.FC = () => {

  const [loggendIn, setLoggend] = useState<boolean>(false)

  useEffect(() => {
    document.title = process.env.REACT_APP_TITLE!
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/test" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
