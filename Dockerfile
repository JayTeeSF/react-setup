# https://registry.hub.docker.com/_/node/
FROM node:5.4.1

# Install apt deps
RUN apt-get update \
    && apt-get install -y wget unzip libelf1 git

# Create app directory
RUN mkdir -p /opt/app
WORKDIR /opt/app

# Install app dependencies
COPY package.json /opt/app
RUN npm install eslint -g
RUN npm install

# Bundle app source
COPY . /opt/app

EXPOSE 8000
CMD [ "npm", "run", "test" ]
