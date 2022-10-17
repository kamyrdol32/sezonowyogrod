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

# Build
RUN npm run build

# Image Nginx
FROM nginx:alpine

# Work directory
#WORKDIR /usr/share/nginx/html

#
COPY --from=builder /frontend/build/* /var/www/sezonowyogrod.kamilzeglen.pl/html/

# Expose port
EXPOSE 3000
#
## Run
#CMD ["npm", "start"]