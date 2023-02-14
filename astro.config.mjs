import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";
import deno from "@astrojs/deno";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), preact()],
	outDir: "./dist/",
	output: "server",
	adapter: deno(),
});
