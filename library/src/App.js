import './App.css';
import Home from './components/Home';
import Members from './components/Members';
import Books from './components/Books';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/members" element={<Members />} />
      </Routes>
    </div>
  );
}

export default App;
