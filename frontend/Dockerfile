FROM node:alpine
WORKDIR /frontend
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm install
RUN npm run build