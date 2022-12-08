import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { CssBaseline, Switch } from "@material-ui/core";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const darkTheme = createTheme({
  palette: {
    type: "dark",
    background: {
      default: "#141414",
    },
  },
});

const lightTheme = createTheme({
  palette: {
    type: "light",
    background: {
      default: "rgb(223, 218, 218)",
    },
  },
});

function App() {
  const [mode, setMode] = useState("dark");
  const [themeIcon, setThemeIcon] = useState(false);
  const selectedTheme = mode === "light" ? lightTheme : darkTheme;

  const toggleTheme = () => {
    setMode(mode === "light" ? "dark" : "light");
    setThemeIcon((prevTheme) => !prevTheme);
  };

  console.log("selected: ", selectedTheme);
  console.log("mode: ", mode);

  return (
    <ThemeProvider theme={selectedTheme}>
      <div className="btn-switch--theme ">
        {themeIcon ? <DarkModeIcon /> : <WbSunnyOutlinedIcon />}
        <Switch onChange={toggleTheme} />
      </div>
      <CssBaseline />
      <Header />
      <Home />
    </ThemeProvider>
  );
}

export default App;
