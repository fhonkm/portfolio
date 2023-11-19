import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SpinnerFullPage from "./ui/SpinnerFullPage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";

// implemented lazy load for future purposes; when I have a dedicated portfolio landing page
const Homepage = lazy(() => import("./pages/Homepage"));
const Portfolio = lazy(() => import("./pages/Portfolio"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SpinnerFullPage />}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Homepage />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
