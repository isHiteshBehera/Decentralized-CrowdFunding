import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production'
    ? '/Decentralized-CrowdFunding/client'
    : '/',
  plugins: [react(), nodePolyfills()],
  define: {
    "process.env": {},
  },
});
