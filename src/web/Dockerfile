FROM node:latest

WORKDIR /app

COPY package.json .

RUN npm install

RUN next build

COPY . .

EXPOSE 8080

CMD ["npm", "run", "start"]