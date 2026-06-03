import { Route, BrowserRouter as Router, Routes } from "react-router";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import Projets from "./pages/Projets";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projets" element={<Projets />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
