/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "images.unsplash.com",
                protocol: "https"
            },
            {
                hostname: "www.zaharaholidays.com",
                protocol: "https"
            },
            {
                hostname: "directus-production-63bd.up.railway.app",
                protocol: "https"
            },
            {
                hostname: "img-cdn.pixlr.com",
                protocol: "https"
            },
            {
                hostname: "img.freepik.com",
                protocol: "https"
            }
            
    ]
    }
}

module.exports = nextConfig
