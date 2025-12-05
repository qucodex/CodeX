import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      {/* All 404 route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
