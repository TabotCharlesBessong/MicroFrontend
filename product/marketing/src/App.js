import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider,createTheme } from "@mui/material/styles";
import Album from "./components/Landing";
import Pricing from "./components/Pricing";


const App = () => {
  const theme = createTheme()
  return (
    <div>
      <ThemeProvider theme={theme} >
        <Router>
          <Routes>
            <Route path="/" exact element={<Album />} />
            <Route path="/pricing" element={<Pricing />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
