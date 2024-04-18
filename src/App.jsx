import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/css/_reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Calendar from "./components/Calendar";
import ReservationModal from "./components/ReservationModal";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Calendar />}></Route>
        <Route path="/reservation" element={<ReservationModal />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
