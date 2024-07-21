import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import vitePluginSvgr from 'vite-plugin-svgr';

const resolveAlias = (dir: string) => path.resolve(__dirname, 'src', dir);

const resolvedAliases = [ 'app', 'entities', 'features', 'shared', 'widgets' ].reduce((accum, dir) =>
		({ ...accum, [dir]: resolveAlias(dir) })
	, {});

export default defineConfig({
	plugins: [ react(), vitePluginSvgr() ],
	resolve: {
		alias: resolvedAliases
	}
});
