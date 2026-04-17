// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Імпорт сторінок
import { Home } from './pages/Home';
import { Booking } from './pages/Booking';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/booking/:trainId" element={<Booking />} />
            
            <Route path="*" element={
              <div className="flex flex-col items-center justify-center py-20">
                <h2 className="text-4xl font-bold mb-4">404</h2>
                <p className="text-slate-500 mb-6">Схоже, цей потяг уже поїхав...</p>
                <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded-xl">На головну</Link>
              </div>
            } />
          </Routes>
        </main>

        <ToastContainer 
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

      </div>
    </BrowserRouter>
  );
};

export default App;
