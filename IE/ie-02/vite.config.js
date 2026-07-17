import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const localNodeModules = path.resolve(__dirname, "node_modules");
const repoNodeModules = path.resolve(__dirname, "../../node_modules");
const modulesDir = fs.existsSync(path.join(localNodeModules, "react")) ? localNodeModules : repoNodeModules;

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "lucide-react": path.resolve(modulesDir, "lucide-react"),
      "react": path.resolve(modulesDir, "react"),
      "react-dom": path.resolve(modulesDir, "react-dom")
    }
  }
});
