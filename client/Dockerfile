FROM node:16-alpine

ARG NPM_TOKEN

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

CMD ["yarn", "run", "dev"]