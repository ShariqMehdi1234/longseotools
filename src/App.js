import React from 'react';
import Filter from './Pages/Filter';
import Docs from './Pages/Docs';
import Pricing from './Pages/Pricing';
import Login from './Pages/Login';
import Register from './Pages/Register';
import HelpCenter from './Pages/HelpCenter';
import Guides from './Pages/Guides';
import Events from './Pages/Events';
import Security from './Pages/Security';
import Blog from './Pages/Blog';
import TextToBinaryConverter from './Pages/TextToBinaryConverter';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Filter />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/helpcenter" element={<HelpCenter />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/events" element={<Events />} />
        <Route path="/security" element={<Security />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/texttobinaryconverter" element={<TextToBinaryConverter />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
