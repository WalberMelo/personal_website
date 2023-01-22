import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/* Components */
import ResponsiveAppBar from "./components/header/ResponsiveAppBar";
import ResponsiveAppBarPages from "./components/header/ResponsiveAppBarPages";
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
                <Box>
                  <IconButton
                    sx={{
                      mt: 1,
                      top: 30,
                      position: "absolute",
                      right: "2%",
                      zIndex: "1000",
                    }}
                    className="btn__Color--Mode"
                    onClick={colorMode.toggleColorMode}
                    color="inherit"
                  >
                    {theme.palette.mode === "dark" ? (
                      <WbSunnyOutlinedIcon />
                    ) : (
                      <DarkModeIcon />
                    )}
                  </IconButton>
                  <ResponsiveAppBar theme={theme} />
                  <Home theme={theme} />
                </Box>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <ResponsiveAppBarPages theme={theme} />
                  <About theme={theme} />
                </>
              }
            />
            <Route
              path="/projects"
              element={
                <>
                  <ResponsiveAppBarPages theme={theme} />
                  <Allprojects theme={theme} />
                </>
              }
            />
            <Route
              path="/project-melody"
              element={
                <>
                  <ResponsiveAppBarPages theme={theme} />
                  <Melody theme={theme} />
                </>
              }
            />
            <Route
              path="/project-quizz"
              element={
                <>
                  <ResponsiveAppBarPages theme={theme} />
                  <Quizz theme={theme} />
                </>
              }
            />
            <Route
              path="/project-getfood"
              element={
                <>
                  <ResponsiveAppBarPages theme={theme} />
                  <Getfood theme={theme} />
                </>
              }
            />
            <Route
              path="/project-cooker"
              element={
                <>
                  <ResponsiveAppBarPages theme={theme} />
                  <Cooker theme={theme} />
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
