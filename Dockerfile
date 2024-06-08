FROM node:20-alpine3.19

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm i

COPY . ./

RUN npm install