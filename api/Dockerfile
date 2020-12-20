FROM node:12-alpine AS build

WORKDIR /api
COPY package*.json /api/
RUN yarn install --frozen-lockfile
COPY tsconfig.json /api/
COPY src /api/src/
RUN npm run tsc
RUN rm -rf node_modules && yarn install --frozen-lockfile

FROM alpine:3
RUN apk add nodejs --no-cache
WORKDIR /api
COPY --from=build /api/node_modules /api/node_modules
COPY --from=build /api/build /api/
EXPOSE 3000
CMD node index.js