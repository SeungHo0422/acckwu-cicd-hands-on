FROM node:20
COPY . /acckwu

RUN npm install
CMD ["npm", "start"]