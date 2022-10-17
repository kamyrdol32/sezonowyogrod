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
WORKDIR /usr/share/nginx/html

# Copy build
COPY --from=builder /frontend/build /usr/share/nginx/html
COPY --from=builder /nginx.conf /etc/nginx/conf.d/default.conf

## Expose port
#EXPOSE 3000
#
### Run
#ENTRYPOINT ["nginx", "-g", "daemon off;"]