import { Route, Routes } from 'react-router-dom';
import './App.css';
import Articles from './components/Articles';
import Navbar from './components/Navbar';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} >
        <Route path="/articles" element={<Articles />} />
      </Route>
    </Routes>
  );
}

export default App;
