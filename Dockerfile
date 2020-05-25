FROM node:12

WORKDIR /app

COPY src/ src/
COPY package.json .env.example tsconfig.json yarn.lock ./
RUN yarn
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start-prod"]