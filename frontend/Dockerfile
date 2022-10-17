# Image
FROM node:alpine

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

## Copy build files
COPY /frontend/build /usr/share/nginx/html

## Expose port
#EXPOSE 3000
#
## Run
#CMD ["npm", "start"]