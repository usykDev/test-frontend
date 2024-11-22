import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import CarrierProfile from "./pages/CarrierProfile";

function App() {
  return (
    <div className="App font-rubik">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element="Головна" />
            <Route path="for-carriers" element="Перевізникам" />
            <Route path="about-us" element="Про нас" />
            <Route path="carrier-profile" element={<CarrierProfile />} />
            <Route path="*" element="Цієї сторінки немає" />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
