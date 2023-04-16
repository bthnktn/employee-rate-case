FROM node:18-alpine

WORKDIR /esr/src/app

EXPOSE 3000
EXPOSE 9002

COPY package*.json yarn.lock ./

RUN yarn install
COPY . .

RUN yarn build

ENTRYPOINT npm run start:both
