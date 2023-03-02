import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

import AllBreeds from "./pages/AllBreeds";
import RandomImage from "./pages/RandomImage";
import Breed from "./pages/Breed";
import SpecificBreed from "./pages/SpecificBreed";
import SubBreed from "./pages/SubBreed";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "./features/api/apiSlice";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <ApiProvider api={apiSlice}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<AllBreeds />} />
                <Route path="/all" element={<AllBreeds />} />
                <Route path="/breeds/image/random" element={<RandomImage />} />
                <Route path="/breed" element={<Breed />}>
                  <Route path=":breed/image" element={<SpecificBreed />} />
                  <Route path=":breed/sub-breeds" element={<SubBreed />} />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </ApiProvider>
    </div>
  );
}

export default App;
