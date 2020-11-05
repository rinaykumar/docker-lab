FROM node:10-alpine

WORKDIR /main
COPY . /main

RUN npm install

EXPOSE 4000

CMD ["node", "index.js"]