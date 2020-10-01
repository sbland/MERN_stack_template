# base image
FROM node:12
WORKDIR /node
ENV PATH /node/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm install
RUN npm install -g nodemon --silent
WORKDIR /node/app
EXPOSE 5000
# start app
CMD ["node", "server"]
