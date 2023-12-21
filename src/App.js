import { BrowserRouter, Route, Routes } from "react-router-dom";
import Strage from './pages/Strage.js';
import Reserv from "./pages/Reserv.js";
import ReservCheck from "./pages/ReservCheck.js";
import NotFound from './pages/NotFound.js';

// メインアプリケーション
function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Strage />} />
        <Route path="/reserv" element={<Reserv />} />
        <Route path="/reservCheck" element={<ReservCheck />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
