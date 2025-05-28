import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  console.log(
    "VITE_API_BASE_URL in vite.config.ts:",
    process.env.VITE_API_BASE_URL
  );
  console.log("Vite build mode: ", mode);
  // -------------------------------------------

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
