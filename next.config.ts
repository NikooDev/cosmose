import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	sassOptions: {
		silenceDeprecations: ['legacy-js-api'],
	},
	experimental: {
		serverSourceMaps: false
	},
	productionBrowserSourceMaps: false
};

export default nextConfig;
