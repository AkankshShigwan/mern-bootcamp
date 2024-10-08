import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage';
import BrowseBootcampsPage from './pages/BrowseBootcampsPage';

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/browse" element={<BrowseBootcampsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
