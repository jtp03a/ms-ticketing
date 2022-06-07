FROM registry.jakepeterson.dev/jpetersondev/dependency_proxy/containers/node:alpine

ARG NPM_TOKEN

ENV NPM_TOKEN=$NPM_TOKEN

WORKDIR /app

COPY .npmrc .npmrc
COPY package.json .

RUN npm install --only=prod

COPY . .

CMD ["npm", "start"]