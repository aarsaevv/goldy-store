import { defineConfig } from "@vue/cli-service";
export default defineConfig({
	transpileDependencies: true,
	publicPath: process.env.BASE_URL,
	assetsDir: process.env.BASE_URL,
});
