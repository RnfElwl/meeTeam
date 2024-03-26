FROM node

COPY package*.json ./

RUN npm ci
RUN npm install -g nodemon

COPY ./ ./


ENTRYPOINT [ "nodemon", "index.js" ]