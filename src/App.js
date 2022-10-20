import React from 'react';
import Filter from './Pages/Filter';
import Docs from './Pages/Docs';
import Pricing from './Pages/Pricing';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Filter />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
