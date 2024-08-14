FROM node:latest

WORKDIR /app

COPY package.json .

RUN npm install

RUN next build

COPY . .

CMD ["npm", "run", "start"]