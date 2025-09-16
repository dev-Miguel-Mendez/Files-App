FROM node:20-bullseye
EXPOSE 3001


WORKDIR /app

COPY package.json .


RUN npm i

COPY . .

CMD ["npm", "run", "dev"]



