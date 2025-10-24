import HomePage from './pages/HomePage/Homepage';
import FooterSection from './containers/FooterSection/FooterSection';
import FinancialCoaching from './pages/FinancialCoaching/FinancialCoaching';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';

import './index.css';
import WealthManagement from './pages/WealthManagement/WealthManagement';
import AboutUs from './pages/AboutUs/AboutUs';

const App = () => {
    return (
        <div className="app">
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/financial-coaching" element={<FinancialCoaching />} />
                <Route path="/wealth-management" element={<WealthManagement />} />
                <Route path="/about-us" element={<AboutUs />} />
            </Routes>
            <FooterSection />
        </div>
    );
};

export default App;
