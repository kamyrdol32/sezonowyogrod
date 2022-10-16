# Image
FROM nginx:alpine

COPY index.html /usr/share/nginx/html/index.html
COPY text.conf /etc/nginx/conf.d/test.conf

# Copy source code
COPY ./nginx.conf /etc/nginx/nginx.conf