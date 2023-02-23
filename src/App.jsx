import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Layout} from "./components/Layout/Layout"
import Home from "./pages/Home/Home";
import NotFoundPage from "./pages/NotFound/NotFound";
import Contact from "./pages/Contact/Contact";
import Detail from "./components/Detail/Detail"

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home/>} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path='/detail' element={<Detail/>}/>
            </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
