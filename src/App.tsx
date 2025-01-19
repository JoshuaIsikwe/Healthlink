import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthScreen } from "@/features/auth/components/auth-screen"
import Layout from './components/Layout/layout';
import { Home } from "@/pages/Home"
import Signature from './pages/Signature';
import Map from './pages/Map';

function App() {
  

  return (
    <>
     <Router>
      <div className="h-screen w-screen bg-gray-100">
      <Routes>
            {/* Auth Screen without layout */}
            <Route path="/login" element={<AuthScreen />} />

            {/* Layout wrapper for other pages */}
            <Route path="/" element={<Layout children={undefined} />}>
              <Route index element={<Home />} /> {/* Default child route */}
              <Route path="submit" element={<Signature />} />
              <Route path="map" element={<Map />} />
            </Route>
          </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
