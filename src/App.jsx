import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Dashboard from './pages/Dashboard';
import InputLog from './pages/InputLog';
import Medication from './pages/Medication';
import Chat from './pages/Chat'
import Auth from './pages/Auth';

function App() {
  return (
    <Router>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 font-sans text-gray-800">
        <Navbar />
        <div className="container mx-auto p-4 md:p-8">
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/input" element={<InputLog />} />
            <Route path="/obat" element={<Medication />} />
            <Route path="/chat" element={<Chat />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;