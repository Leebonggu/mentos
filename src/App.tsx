import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, CampApply, CampDetail, Community, NotFound } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<CampApply />} />
        <Route path="/detail/:id" element={<CampDetail />} />
        <Route path="/community/:id" element={<Community />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
