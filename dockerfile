FROM node:alpine

LABEL version ="1.0" description ="node-image"

WORKDIR /usr/app

COPY  package*.json ./

RUN npm install 

COPY . . 

EXPOSE 5432

CMD ["npm", "start"]