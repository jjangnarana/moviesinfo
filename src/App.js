import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          basename={`${process.env.PUBLIC_URL}`}
          path="/movie/:id"
          element={<Detail />}
        />
        <Route
          basename={`${process.env.PUBLIC_URL}`}
          path="/"
          element={<Home />}
        />
      </Routes>
    </Router>
  );
};

export default App;
