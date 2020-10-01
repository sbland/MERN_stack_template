# base image
FROM node:12

# WORKDIR /app

COPY package*.json ./
# COPY package-lock.json ./
RUN npm install
RUN npm install -g nodemon --silent
WORKDIR /app
# COPY . .
# Note ensure you have downloaded the client folder and run npm run client-install

# FROM node:12.2.0-alpine
# FROM ubuntu

# set working directory
# WORKDIR /app
# COPY package.json ./

# add `/app/node_modules/.bin` to $PATH
# ENV PATH /usr/src/cache/node_modules/.bin:$PATH

# install and cache app dependencies
# COPY package.json /app/package.json
# RUN npm install -g --silent
# RUN npm install -g nodemon --silent

# COPY Server files
# Ensure */node_modules is in .dockerignore
# COPY ./ /app

EXPOSE 5000
# start app
CMD ["node", "server"]
