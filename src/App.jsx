import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';

export default function App() {
    return (
        <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/signup" element={<SignupPage />} />
                        <Route path="/notfound" element={<NotFound />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}
