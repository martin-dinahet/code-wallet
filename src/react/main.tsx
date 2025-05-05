import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { RootLayout } from "./layouts/root-layout";
import { IndexPage } from "./pages";

createRoot(document.body).render(
  <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<IndexPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </>
);
