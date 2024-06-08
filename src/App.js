import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
// import Error404 from "./utils/Error404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/app/*" element={<AppLayout />} />
        <Route path="/" element={<Navigate to="/app/public" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
