module.exports = {
  apps: [
    {
      name: 'docs.khanz1.dev',
      script: 'npm install && npm run build && npm start',
      // args: '-c "npm install && npm run build && npm start"',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
    },
  ],
};
