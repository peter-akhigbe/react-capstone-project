import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/emoji/:key" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
