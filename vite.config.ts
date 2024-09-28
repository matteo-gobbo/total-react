/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite(), react()],
  test: {
    include: ["src/**/*.unit.test.ts"],
    reporters: ["json", "default"],
    outputFile: "./test-output.json",
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
});
