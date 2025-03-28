FROM node:22.14-alpine
WORKDIR /app
COPY package.json .
RUN npm install
RUN npm install -g nodemon
COPY . .
EXPOSE 4000
CMD ["nodemon", "--watch", ".", "--legacy-watch", "index.js"]
