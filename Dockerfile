FROM node:8

ADD package.json .
# Install dependencies
# RUN yarn --prod
RUN yarn

ADD . .

CMD node src/server.js
