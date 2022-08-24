FROM node:16.15

WORKDIR /usr/src/app

COPY yarn*.lock ./
COPY package*.json ./

RUN yarn install

COPY . .