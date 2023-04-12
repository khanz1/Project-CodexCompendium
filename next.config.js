const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  // nextra starts with the docs folder
  // so we need to go up one level
  // navbar: [],
});

module.exports = withNextra();
