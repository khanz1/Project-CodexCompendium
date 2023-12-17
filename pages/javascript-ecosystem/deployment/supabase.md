# Deploy to Supabase

## Create database on Supabase

- Database Configuration
  1. head to [https://supabase.com/](https://supabase.com/) → create account
  2. create organization :
     - create project and password (save it)
     - choose region
  3. open menu → project settings → choose Database
  4. set database to stage `production`

```json copy
"production": {
    "use_env_variable": "DATABASE_URL"
}
```
