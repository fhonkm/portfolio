import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SpinnerFullPage from "./ui/SpinnerFullPage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";

// implemented lazy load for future purposes; when I have a dedicated portfolio landing page
const Homepage = lazy(() => import("./pages/Homepage"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const PortfolioPizzeria = lazy(() => import("./pages/PortfolioPizzeria"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SpinnerFullPage />}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Homepage />} />
            <Route path="portfolio">
              <Route index element={<Portfolio />} />
              <Route path="pizzeria" element={<PortfolioPizzeria />} />
            </Route>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
