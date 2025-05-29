import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import CreditCards from './pages/CreditCards';
import Services from './pages/Services';
import Setting from './pages/Setting';
import EditProfile from './components/Setting/EditProfile';
import Preferences from './components/Setting/Preferences';
import Security from './components/Setting/Security';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/credit-cards" />} />
          <Route path="credit-cards" element={<CreditCards />} />
          <Route path="services" element={<Services />} />
          <Route path="setting" element={<Setting />}>
            <Route index element={<Navigate to="edit-profile" />} />
            <Route path="edit-profile" element={<EditProfile />} />
            <Route path="preferences" element={<Preferences />} />
            <Route path="security" element={<Security />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
