import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./pages/registration/Registration";
import Genre from "./pages/genre/Genre";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/genre" element={<Genre />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
