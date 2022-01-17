import { Routes, Route } from 'react-router-dom';
import { Home, CampApply, CampDetail, Community, NotFound } from '@pages/index';

function RootRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apply" element={<CampApply />} />
      <Route path="/detail/:id" element={<CampDetail />} />
      <Route path="/community/:id" element={<Community />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RootRoutes;
