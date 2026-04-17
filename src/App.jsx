import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Home } from './pages/Home';
import { Booking } from './pages/Booking';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
        
        <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl">Step 🚆</span>
              <span className="font-black text-xl tracking-tighter uppercase">
                Ukrzaliznytsia <span className="text-blue-600">Clone</span>
              </span>
            </Link>
            
            <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
              <Link to="/" className="hover:text-blue-600 transition-colors">Розклад</Link>
              <button className="hover:text-blue-600 transition-colors">Мої квитки</button>
              <button className="hover:text-blue-600 transition-colors">Допомога</button>
            </div>
          </div>
        </nav>

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

        <footer className="bg-white border-t border-slate-200 py-8 mt-12">
          <div className="max-w-7xl mx-auto px-4 text-center text-slate-400 text-sm">
            <p>© 2026 Залізнична система бронювання</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
