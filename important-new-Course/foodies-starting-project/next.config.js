const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "joekira.s3.eu-north-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
