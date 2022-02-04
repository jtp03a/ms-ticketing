FROM node:14-alpine

ARG NPM_TOKEN

WORKDIR /app

COPY .npmrc .npmrc
COPY package.json .

RUN npm install

RUN rm -f .npmrc

COPY . .

CMD ["npm", "run", "dev"]