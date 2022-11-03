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

# Run
CMD ["npm", "start"]






## Build
#RUN npm run build
#
#
## Image Nginx
#FROM nginx:alpine
#
## Copy build
#COPY --from=builder /frontend/build /usr/share/nginx/html
#
## Expose port
#EXPOSE 3000 80
#
#ENTRYPOINT ["nginx", "-g", "daemon off;"]
