FROM node:alpine

LABEL version ="1.0" description ="node-image"

WORKDIR /app

COPY  package*.json ./

RUN npm install 

COPY . . 

EXPOSE 3000

CMD ["npm", "dev"]