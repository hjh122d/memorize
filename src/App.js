import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layouts/Layout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import List from "./pages/List";
import Quiz from "./pages/Quiz";
import Update from "./pages/Update";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/update" element={<Update />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
