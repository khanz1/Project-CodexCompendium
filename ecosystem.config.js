module.exports = {
  apps: [
    {
      name: 'docs.khanz1.dev',
      script: 'npm',
      args: 'start:prod',
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
