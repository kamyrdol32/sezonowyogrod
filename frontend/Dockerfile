# Image
FROM node:alpine

# Work directory
WORKDIR /frontend

# Requirements
COPY package*.json ./

# Copy source code
COPY ./ ./

# Installations
RUN npm install

# Build
# RUN npm run build

# Image Nginx
# FROM nginx:alpine

# Work directory
#WORKDIR /usr/share/nginx/html

# Copy build
# COPY --from=builder /frontend/build/* /var/www/sezonowyogrod.kamilzeglen.pl/html/

# Expose port
EXPOSE 3000
#
# Run
