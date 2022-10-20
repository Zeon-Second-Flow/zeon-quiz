import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "node:path";
// import * as fs from "fs";

/* eslint-disable  import/no-default-export */
// https://vitejs.dev/config/
export default defineConfig(({command}) => {
    const config = {
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src"),
            },
        },
        server: {
            port: 3000,
        },
    };

    if (command === "build") {
        return {
            ...config,
            esbuild: {
                jsxInject: "import React from \"react\";",
            },
        };
    }

    return {
        ...config,
        esbuild: {
            jsxInject: "import React from \"react\";",
        },
        plugins: [react(), svgr()],
    };
});
/* eslint-enable  import/no-default-export */
