import { BrowserRouter, Route, Routes } from "react-router-dom";
import SettingPage from "./pages/Setting";
import StudentPage from "./pages/StudentPage";
import CoursePage from "./pages/CoursePage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      {/* Your app content */}
       <Routes>
        <Route path="/" element={<HomePage/> } />
        <Route path="/student" element={ <StudentPage/>} />
        <Route path="/course" element={<CoursePage />} />
        <Route path="/setting" element={<SettingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
