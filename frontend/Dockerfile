# Image
FROM node:alpine as builder

# Work directory
WORKDIR /frontend

# Requirements
COPY package*.json ./

# Installations
RUN npm install

# Copy source code
COPY ./ ./

## Build
#RUN npm run build

# Copy test file
#COPY ../src/index.html /usr/share/nginx/html/index.html
#COPY ../src/index.html /var/www/sezonowyogrod.kamilzeglen.pl/index.html

#VOLUME ../src /usr/share/nginx/html


# Image Nginx
FROM nginx:alpine

## Copy build
#COPY --from=builder /frontend/build/ /usr/share/nginx/html

## Expose port
#EXPOSE 3000