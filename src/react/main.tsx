import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { StrictMode } from "react";
import { RootLayout } from "./layouts/root-layout";
import { IndexPage } from "./pages";
import { ThemeProvider } from "./providers/theme-provider";

createRoot(document.querySelector("#root")).render(
  <>
    <StrictMode>
      <ThemeProvider defaultTheme="light" storageKey="theme">
        <HashRouter>
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<IndexPage />} />
            </Route>
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </StrictMode>
  </>
);
