 # base image
FROM node:12
WORKDIR /node
ENV PATH /node/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm install
WORKDIR /node/app
EXPOSE 3000
ENTRYPOINT npm start