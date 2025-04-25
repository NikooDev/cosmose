import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [{
			protocol: 'https',
			hostname: 'firebasestorage.googleapis.com'
		}],
	},
	sassOptions: {
		silenceDeprecations: ['legacy-js-api'],
	},
	experimental: {
		serverSourceMaps: false
	},
	productionBrowserSourceMaps: false
};

export default nextConfig;
