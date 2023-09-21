/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['staff-profile-image.s3.eu-west-2.amazonaws.com'], // Add your S3 bucket domain here
    },
}

module.exports = nextConfig
