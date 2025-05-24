/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'fsaeluz.netlify.app',
			},
		],
	},
};

export default nextConfig;
