const path = require('path');
const withImage = require('next-images');

module.exports = withImage({
  images: {
    domains: ['kise.cafebazaar.cloud', 'football360.ir', 'metrica.ir'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    APP_URL: 'https://stg.test.ir/api',
  },
});
