FROM node:alpine

ARG NPM_TOKEN
ARG NPM_REGISTRY

WORKDIR /app

COPY package.json .

RUN npm install --only=prod

COPY . .