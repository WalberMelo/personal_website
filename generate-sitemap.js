// 1) npm install fs path
// 2) After building your project, run: npm run generate-sitemap

// Advantages of Using a Custom Script
// 	•	Full Control: You can tailor the sitemap to your needs.
// 	•	Dynamic Data Support: Easily integrate data from APIs, databases, or other external sources.
// 	•	Custom Logic: Implement specific rules for inclusion/exclusion.

const fs = require("fs");
const path = require("path");

const BASE_URL = "https://www.walbermelo.com"; // Replace with your actual domain

// Define your routes
const routes = [
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
];

// Generate sitemap content
const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (route) => `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === "/" ? "1.0" : "0.8"}</priority>
  </url>
`
    )
    .join("")}
</urlset>
`;

  // Write sitemap.xml to the dist directory
  const outputPath = path.resolve(__dirname, "dist", "sitemap.xml");
  fs.writeFileSync(outputPath, sitemap, "utf8");
  console.log(`Sitemap generated at ${outputPath}`);
};

generateSitemap();
