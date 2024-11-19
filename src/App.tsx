import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/Home';
import ForYou from './pages/ForYou';
import Following from './pages/Following';
import NewsShowcase from './pages/NewsShowcase';
import NewZealand from './pages/NewZealand';
import World from './pages/World';
import Local from './pages/Local';
import Business from './pages/Business';
import Technology from './pages/Technology';
import Entertainment from './pages/Entertainment';
import SportsScience from './pages/SportsScience';
import Health from './pages/Health';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/for-you" element={<ForYou />} />
                <Route path="/following" element={<Following />} />
                <Route path="/news-showcase" element={<NewsShowcase />} />
                <Route path="/new-zealand" element={<NewZealand />} />
                <Route path="/world" element={<World />} />
                <Route path="/local" element={<Local />} />
                <Route path="/business" element={<Business />} />
                <Route path="/technology" element={<Technology />} />
                <Route path="/entertainment" element={<Entertainment />} />
                <Route path="/sports-science" element={<SportsScience />} />
                <Route path="/health" element={<Health />} />
            </Routes>
        </Router>
    );
}

export default App;
