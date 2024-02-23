/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.5rem",
      },
      gridTemplateColumns: {
        autofill: "repeat(auto-fill, minmax(200px, 1fr) )",
      },
    },
  },
  plugins: [],
};
