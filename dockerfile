FROM node:12.2.0-alpine

# create app directory
RUN mkdir -p /svr/app/client
WORKDIR /svr/app/client

RUN pwd
COPY package.json /svr/app/client
COPY package-lock.json /svr/app/client

# Install dependecies
RUN npm install

#copy all the other files in to the container
COPY src /srv/app/client
COPY public /srv/app/client

CMD [ "npm", "start" ]