import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";

export default defineConfig(({ mode }) => {
  // Load the environment variables based on the mode (development/production)
  const env = loadEnv(mode, process.cwd());

  const API_URL =
    mode === "production" ? env.VITE_API_URL_PROD : env.VITE_API_URL_DEV;

  const API_TOKEN =
    mode === "production" ? env.VITE_API_TOKEN_PROD : env.VITE_API_TOKEN_DEV;

  return {
    plugins: [
      react(),
      sitemap({
        hostname: "https://www.walbermelo.com",
        robots: [{ userAgent: "*", allow: "/" }],
        routes: [
          "/",
          "/about",
          "/projects",
          "/project-melody",
          "/project-attendance",
          "/project-quizz",
          "/project-getfood",
          "/project-cooker",
          "/project-quotegenerator",
          "/articles",
        ],
      }),
    ],
    define: {
      "process.env": {}, // This line is not really needed unless you're using process.env directly
      "import.meta.env.VITE_API_URL": JSON.stringify(API_URL),
      "import.meta.env.VITE_API_TOKEN": JSON.stringify(API_TOKEN),
    },
  };
});
