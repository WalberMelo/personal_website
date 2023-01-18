import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/* Components */
import Header from "./components/header/Header";
import HeaderPages from "./components/header/HeaderPages";
import Footer from "./components/footer/footer";
import ScrollToTop from "./components/scroll/ScrollToTop";

/* Pages */
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import { Allprojects } from "./pages/project/Allprojects/Allprojects";
import Melody from "./pages/project/melody/Melody";
import Quizz from "./pages/project/quizz/Quizz";
import Getfood from "./pages/project/getfood/Getfood";
import Cooker from "./pages/project/cooker/Cooker";

/* Material UI */
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
      }}
    >
      <Router>
        <ScrollToTop>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <IconButton
                    sx={{
                      mt: 1,
                      position: "absolute",
                      right: "2%",
                      zIndex: "1000",
                    }}
                    onClick={colorMode.toggleColorMode}
                    color="inherit"
                  >
                    {theme.palette.mode === "dark" ? (
                      <WbSunnyOutlinedIcon />
                    ) : (
                      <DarkModeIcon />
                    )}
                  </IconButton>
                  <Header theme={theme} />
                  <Home />
                  <Footer theme={theme} />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <HeaderPages theme={theme} />
                  <About theme={theme} />
                  <Footer theme={theme} />
                </>
              }
            />
            <Route
              path="/projects"
              element={
                <>
                  <HeaderPages theme={theme} />
                  <Allprojects theme={theme} />
                  <Footer theme={theme} />
                </>
              }
            />
            <Route
              path="/project-melody"
              element={
                <>
                  <HeaderPages theme={theme} />
                  <Melody theme={theme} />
                  <Footer theme={theme} />
                </>
              }
            />
            <Route
              path="/project-quizz"
              element={
                <>
                  <HeaderPages theme={theme} />
                  <Quizz theme={theme} />
                  <Footer theme={theme} />
                </>
              }
            />
            <Route
              path="/project-getfood"
              element={
                <>
                  <HeaderPages theme={theme} />
                  <Getfood theme={theme} />
                  <Footer theme={theme} />
                </>
              }
            />
            <Route
              path="/project-cooker"
              element={
                <>
                  <HeaderPages theme={theme} />
                  <Cooker theme={theme} />
                  <Footer theme={theme} />
                </>
              }
            />
          </Routes>
        </ScrollToTop>
      </Router>
    </Box>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
