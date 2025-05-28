// vite.config.ts
import { defineConfig, loadEnv } from "vite"; // <--- Ensure loadEnv is imported
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  // Load environment variables based on the current mode
  // This ensures `env.VITE_API_BASE_URL` gets the value from .env files or process.env
  const env = loadEnv(mode, process.cwd(), "VITE_");

  // These console logs are FOR DEBUGGING THE BUILD PROCESS IN GITHUB ACTIONS.
  // They should show the masked secret (***).
  console.log(
    "VITE_API_BASE_URL in vite.config.ts (process.env):",
    process.env.VITE_API_BASE_URL
  );
  console.log(
    "VITE_API_BASE_URL in vite.config.ts (loaded env):",
    env.VITE_API_BASE_URL
  );
  console.log("Vite build mode: ", mode);

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    // --- THIS IS THE CRITICAL PART TO ENSURE THE VARIABLE IS EMBEDDED ---
    define: {
      "import.meta.env.VITE_API_BASE_URL": JSON.stringify(
        env.VITE_API_BASE_URL
      ),
    },
    // -------------------------------------------------------------------
  };
});
