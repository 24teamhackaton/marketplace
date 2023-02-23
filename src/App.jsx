import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Layout} from "./components/Layout/Layout"
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import NotFoundPage from "./pages/NotFound/NotFound";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
   
      <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home/>} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/detail" element={Detail} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
