import { useEffect, useState } from 'react';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Welcome from './Views/Welcome/Welcome';
import Dashboard from './Views/Dashboard/Dashboard';

import './Globals.css';
import './App.css';

const App:React.FC = () => {

  const [loggendIn, setLoggend] = useState<boolean>(false)

  useEffect(() => {
    document.title = process.env.REACT_APP_TITLE!
  }, []);

  return (
    <div className="app">
      <Header />
      <main className='main'>
        { loggendIn 
          ? <Dashboard />
          : <Welcome />
        }
      </main>
      <Footer />
    </div>
  );
}

export default App;
