FROM node:12.14
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package*.json ./
RUN npm install
COPY . . 
EXPOSE 8080
CMD npm run start-dev