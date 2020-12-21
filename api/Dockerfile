FROM balenalib/raspberrypi3-alpine-node:12
WORKDIR /app

ENV INITSYSTEM on

COPY package.json yarn.lock ./

RUN yarn install --immutable --immutable-cache

COPY . ./

RUN yarn build

CMD node ./build/index.js
