FROM node:15.3.0
WORKDIR /app
EXPOSE 80
COPY package.json /app
RUN npm install
COPY . /app
CMD ["npm", "start"]