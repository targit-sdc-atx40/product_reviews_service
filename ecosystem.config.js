module.exports = {
  apps: [{
    name: 'product_reviews_service',
    script: './server/server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-3-19-71-180.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/dvcProductReviews.pem',
      ref: 'origin/master',
      repo: 'https://github.com/targitatx/product_reviews_service.git',
      path: '/home/ubuntu/product_reviews_service',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}