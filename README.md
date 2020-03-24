# Install Back end api

1. `composer install` to install php dependecies

2. Configure .env file by copying .env.example file. To create keys for app_key and jwt_secret use command `openssl rand -base64 24`

3. `php artisan migrate` to migrate database

# Install Front end app

1. `npm install` or `yarn install` to install dependencies

2. `npm run prod` to build production version or `npm run watch` to run development version

# To view development app in browser

run command `php -S localhost:8000 -t public` and navigate to http://localhost:8000/#/ to view the app.
 
