import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  const plugins = [react()];

  // Only load lovable-tagger in development
  if (mode === "development") {
  const mod: any = await import("lovable-tagger");
  plugins.push(mod.componentTagger());
}


  return {
    base: mode === "production" ? "/chitrankan_website/" : "/",
    server: {
      host: "::",
      port: 8080,
    },
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      outDir: "dist",
    },
  };
});
