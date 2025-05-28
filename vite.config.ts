import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(() => {
  console.log(
    "VITE_API_BASE_URL in vite.config.ts (for define):",
    process.env.VITE_API_BASE_URL
  );
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    define: {
      // TEMPORARY: HARDCODE A TEST URL TO SEE IF 'define' WORKS AT ALL
      "import.meta.env.VITE_API_BASE_URL": JSON.stringify(
        process.env.VITE_API_BASE_URL
      ),
    },
  };
});
