FROM node:16.13.1-alpine

RUN mkdir -p /app
WORKDIR /app

ADD package.json package-lock.json ./
RUN npm ci

ADD . ./

CMD ["npm", "run", "start:dev"]
