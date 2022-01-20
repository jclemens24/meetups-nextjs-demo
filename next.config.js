module.exports = {
  reactStrictMode: true,
  env: {
    GREETING: process.env.GREETING,
    DB_PASSWORD: process.env.DB_PASSWORD
  },
  images: {
    domains: ['images.unsplash.com']
  }
};
