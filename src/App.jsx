import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/* Components */
import Logo from "./components/logo/Logo";
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";
import ScrollToTop from "./components/scroll/ScrollToTop";

/* Pages */
import Home from "./pages/home/Home";
import Melody from "./pages/project/melody/Melody";
import Quizz from "./pages/project/quizz/Quizz";
import Getfood from "./pages/project/getfood/Getfood";

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
                  <Header />
                  <Home />
                  <Footer theme={theme} />
                </>
              }
            />
            <Route
              path="/project-melody"
              element={
                <>
                  <Logo />
                  <Melody theme={theme} />
                  <Footer theme={theme} />
                </>
              }
            />
            <Route
              path="/project-quizz"
              element={
                <>
                  <Logo />
                  <Quizz theme={theme} />
                  <Footer theme={theme} />
                </>
              }
            />
            <Route
              path="/project-getfood"
              element={
                <>
                  <Logo />
                  <Getfood theme={theme} />
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
