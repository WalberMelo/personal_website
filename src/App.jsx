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
import Attendance from "./pages/project/controlAttandence/ControlAttendence";
import Quizz from "./pages/project/quizz/Quizz";
import Getfood from "./pages/project/getfood/Getfood";
import Cooker from "./pages/project/cooker/Cooker";
import QuoteGenerator from "./pages/project/quoteGenerator/quoteGenerator";
import Roomly from "./pages/project/roomly/Roomly";

/* Material UI */
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Articles from "./pages/home/sectionArticles/Articles";
import { SpeedInsights } from "@vercel/speed-insights/react";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const [showThemeHint, setShowThemeHint] = React.useState(false);

  React.useEffect(() => {
    let revertTimeout;
    const demoTimeout = setTimeout(() => {
      colorMode.toggleColorMode();
      setShowThemeHint(true);
      revertTimeout = setTimeout(() => {
        colorMode.toggleColorMode();
        setShowThemeHint(false);
      }, 3000);
    }, 5000);

    return () => {
      clearTimeout(demoTimeout);
      if (revertTimeout) clearTimeout(revertTimeout);
    };
  }, []);

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
                  <Tooltip title="Click here to switch themes." placement="left" arrow>
                    <IconButton
                      sx={{
                        mt: 1,
                        top: 30,
                        position: "absolute",
                        right: "2%",
                        zIndex: "1000",
                        backgroundColor:
                          theme.palette.mode === "light" ? "#c1adef" : "#9e76fb",
                        transform: "translateY(-10)",
                        animation: "moveUpDown 0.8s infinite alternate",
                        "@keyframes moveUpDown": {
                          from: {
                            transform: "translateY(0)",
                          },
                          to: {
                            transform: "translateY(-10px)",
                          },
                        },
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
                  </Tooltip>
                  {showThemeHint && (
                    <Box
                      sx={{
                        position: "absolute",
                        right: "60px",
                        top: 40,
                        bgcolor: "background.paper",
                        color: "text.primary",
                        p: 1,
                        borderRadius: 1,
                        boxShadow: 3,
                        fontSize: "0.8rem",
                      }}
                    >
                      Click here to switch themes.
                    </Box>
                  )}
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
              path="/project-attendance"
              element={
                <>
                  <ResponsiveAppBarPages theme={theme} />
                  <Attendance theme={theme} />
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
            <Route
              path="/project-quotegenerator"
              element={
                <>
                  <ResponsiveAppBarPages theme={theme} />
                  <QuoteGenerator theme={theme} />
                </>
              }
            />
            <Route
              path="/project-roomly"
              element={
                <>
                  <ResponsiveAppBarPages theme={theme} />
                  <Roomly theme={theme} />
                </>
              }
            />
            <Route
              path="/eneya"
              element={
                <>
                  <ResponsiveAppBarPages theme={theme} />
                  <Articles theme={theme} />
                </>
              }
            />
            <Route
              path="/articles"
              element={
                <>
                  <ResponsiveAppBarPages theme={theme} />
                  <Articles theme={theme} />
                </>
              }
            />
          </Routes>
        </ScrollToTop>
      </Router>
      <SpeedInsights />
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
