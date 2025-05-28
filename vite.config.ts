import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(() => {
  const apiBaseUrlFromEnv = process.env.VITE_API_BASE_URL;

  // --- ADD THESE NEW DEBUG LOGS ---
  console.log(
    "DEBUG_VITE: VITE_API_BASE_URL from process.env:",
    apiBaseUrlFromEnv
  );
  console.log(
    "DEBUG_VITE: typeof apiBaseUrlFromEnv:",
    typeof apiBaseUrlFromEnv
  );
  console.log(
    "DEBUG_VITE: JSON.stringify(apiBaseUrlFromEnv):",
    JSON.stringify(apiBaseUrlFromEnv)
  );
  // ---------------------------------

  // Use a fallback just to be absolutely sure something gets defined if it's undefined
  const definedApiBaseUrl =
    typeof apiBaseUrlFromEnv === "string" && apiBaseUrlFromEnv !== ""
      ? apiBaseUrlFromEnv
      : "https://FALLBACK_URL_SHOULD_NOT_BE_USED.com"; // This should ONLY appear if your secret is truly bad

  console.log("DEBUG_VITE: Using for define:", definedApiBaseUrl); // What's actually passed to define

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    define: {
      "import.meta.env.VITE_API_BASE_URL": JSON.stringify(definedApiBaseUrl),
    },
  };
});
