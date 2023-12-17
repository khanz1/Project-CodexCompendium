
# Railway Deployment

## Server Configuration

- 1. make sure to add script to start our application in `package.json`

```json
"scripts": {
  "start": "node app.js"
}
```

- 2. make sure to get port from env `process.env.PORT || 3000`
- 3. make sure that `dotenv` is only in development mode

```jsx
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
```

## Railway CLI

- head to [https://railway.app/](https://railway.app/dashboard) → to create new account
- install package :
  - **homebrew**: `brew install railway`
  - **npm**: `npm i -g @railway/cli`
- run `railway login`

## Railway App

- GUI: create an app in railway dashboard (website)
- CLI: run `railway init`

## Push to Railway

- run `railway up`

## Setup Environment

- GUI: choose app → Variables
- CLI: `railway vars set NODE_ENV=production`
- CLI: `railway vars set DATABASE_URL=postgresql://[DATABASE_URI]`

## Migrating & seeding database

- run `railway run npm i`
- run `railway run npx sequelize-cli db:migrate`
- run `railway run npx sequelize-cli db:seed:all`

## Re-deploy to Railway

- run `railway up`

## Generate domain

- open dashboard railway
- select project → settings → generate domain
