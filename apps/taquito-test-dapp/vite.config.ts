import { defineConfig } from "vite";
import path from "path";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  const isBuild = command === "build";
  return defineConfig({
    plugins: [svelte()],
    define: {
    },
    build: {
      target: "es6",
      commonjsOptions: {
        transformMixedEsModules: true
      }
    },
    server: {
      port: 3030
    },
    resolve: {
      alias: {
        // dedupe @sparkdreamnft/beacon-sdk
        // I almost have no idea why it needs `cjs` on dev and `esm` on build, but this is how it works 🤷‍♂️
        "@sparkdreamnft/beacon-dapp": path.resolve(
          path.resolve(),
          // "./src/walletbeacon.dapp.min.js"
          `../../node_modules/@sparkdreamnft/beacon-dapp/dist/${isBuild ? "esm" : "cjs"
          }/index.js`
          // `../../node_modules/@sparkdreamnft/beacon-dapp/dist/walletbeacon.dapp.min.js`
        ),
        "@sparkdreamnft/beacon-sdk": path.resolve(
          path.resolve(),
          `../../node_modules/@sparkdreamnft/beacon-sdk/dist/${isBuild ? "esm" : "cjs"
          }/index.js`
        ),
        // polyfills
        "readable-stream": "vite-compatible-readable-stream",
        "stream": "vite-compatible-readable-stream"
      },
      preserveSymlinks: true
    }
  });
};
