
import { Routes, Route } from 'react-router-dom';
// @ts-ignore: allow importing JS module without a declaration file
import Home from "./Pages/Home";
// @ts-ignore: allow importing JS module without a declaration file
import WorksPage from "./Pages/WorksPage";
// @ts-ignore: allow importing JS module without a declaration file
import AboutPage from "./Pages/AboutPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/works" element={<WorksPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  )
}

export default App;