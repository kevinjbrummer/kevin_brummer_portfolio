FROM node:19

WORKDIR /app/src

COPY ./src/package*.json /app/src/package*.json

RUN npm cache clean --force 

RUN npm install express

RUN npm i install sass

EXPOSE 3000

CMD [ "npm", "run", "dev" ]

