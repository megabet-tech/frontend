import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import DrawLive from "./pages/live";

function App() {
  return (
    <>
      <Routes>
        <Route path="/app" element={<HomePage />} />
        <Route path="/" element={<DrawLive />} />
      </Routes>
    </>
  );
}

export default App;
