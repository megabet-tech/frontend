import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import DrawLive from "./pages/live";
import DefaultLayout from "./layouts";

function App() {
  return (
    <>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/live" element={<DrawLive />} />
        </Routes>
      </DefaultLayout>
    </>
  );
}

export default App;
