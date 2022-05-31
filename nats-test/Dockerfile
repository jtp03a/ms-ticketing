FROM node:alpine

ARG NPM_TOKEN

WORKDIR /app

COPY .npmrc .npmrc
COPY package.json .

RUN npm install --only=prod

RUN rm -f .npmrc

COPY . .

CMD ["npm", "run", "publish"]