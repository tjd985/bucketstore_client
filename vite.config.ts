/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    collectCoverageFrom: ["src/**/*.tsx", "src/**/*.ts"],
    setupFiles: "src/spec/setupTests.ts",
    testMatch: ["./src/spec/*.spec.tsx"],
    environment: "jsdom",
    coverage: {
      all: true,
      exclude: ["*.config.ts", "*.cjs", "**/main.tsx", "**/constants.ts"],
      provider: "v8",
      reporter: ["text", "json", "html"],
      reportsDirectory: "./coverage",
    },
  },
});
