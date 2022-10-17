# Image
FROM node:alpine

# Work directory
WORKDIR /frontend

# Requirements & Installations
COPY package*.json ./
RUN npm install

# Copy source code
COPY ./ ./

# Build
RUN npm run build

# Expose port
EXPOSE 3000

# Run
CMD ["npm", "start"]