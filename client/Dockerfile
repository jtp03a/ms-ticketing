FROM registry.jakepeterson.dev/jpetersondev/dependency_proxy/containers/node:16-alpine

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

CMD ["yarn", "run", "dev"]