# Image
FROM node:alpine as build-stage

# Work directory
WORKDIR /frontend

# Requirements & Installations
COPY package*.json ./
RUN npm install

# Copy source code
COPY ./ ./

# Build
RUN npm run build

# Copy build files
FROM nginx:1.17.1-alpine
COPY --from=build-stage /frontend/build /usr/share/nginx/html

# Expose port
EXPOSE 3000

# Run
CMD ["npm", "start"]