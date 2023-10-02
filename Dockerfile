# Step 1: Build the Angular app
FROM node:16 AS build
WORKDIR /app
COPY captcha/package.json captcha/package-lock.json ./
RUN npm install
COPY captcha/ .
RUN npm run build -- --configuration production

# Step 2: Serve the app using Nginx
FROM nginx:1.19
COPY --from=build /app/dist/captcha /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
