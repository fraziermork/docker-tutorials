# Set the base image
FROM node:latest

WORKDIR /app
ADD . /app
EXPOSE 8080
RUN npm install
CMD ["npm", "start"]
