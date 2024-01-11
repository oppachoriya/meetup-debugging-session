import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import UserApp from './UserApp';
import ReverseFloat from './ReverseFloat'; 
import Layout from './Layout';
import './App.css';

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/user" element={<UserApp />} />
          <Route path="/num" element={<ReverseFloat />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
