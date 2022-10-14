# Image
FROM node:alpine

# Work directory
WORKDIR /frontend

# Requirements & Installations
COPY package*.json ./
RUN npm ci -qy

# Copy source code
COPY ./ ./

EXPOSE 3000