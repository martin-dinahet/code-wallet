import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { StrictMode } from "react";
import { RootLayout } from "./layouts/root-layout";
import { IndexPage } from "./pages";

createRoot(document.querySelector("#root")).render(
  <>
    <StrictMode>
      <HashRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<IndexPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </StrictMode>
  </>
);
