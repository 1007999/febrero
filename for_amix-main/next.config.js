// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: '/',
        permanent: true,
      },
    ];
  },
};
