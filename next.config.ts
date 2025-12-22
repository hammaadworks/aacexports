import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    allowedDevOrigins: [
        'local-origin.dev',
        '*.local-origin.dev',
        'http://localhost:3000',
        '192.168.1.4',
        '192.168.1.4:3000', // Add the specific origin with the port
    ],
};

export default nextConfig;
