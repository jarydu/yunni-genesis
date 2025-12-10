import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer } from './components/Navigation';
import Home from './pages/Home';
import { APSPage, AIOpsPage, EducationPage, CustomAIPage } from './pages/Solutions';
import { Industries, Technology, Resources, About, Contact } from './pages/CorePages';
import { CaseList, CaseDetail } from './pages/Cases';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-brand-dark text-brand-text flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Solutions */}
            <Route path="/solutions/aps" element={<APSPage />} />
            <Route path="/solutions/aiops" element={<AIOpsPage />} />
            <Route path="/solutions/ai-education" element={<EducationPage />} />
            <Route path="/solutions/custom-ai" element={<CustomAIPage />} />
            <Route path="/solutions" element={<APSPage />} /> {/* Fallback or Overview */}

            {/* Core Pages */}
            <Route path="/industries" element={<Industries />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Cases */}
            <Route path="/cases" element={<CaseList />} />
            <Route path="/cases/:id" element={<CaseDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;