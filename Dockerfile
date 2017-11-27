FROM node:6.11

MAINTAINER J. Scott Smith <scott@newleafsolutionsinc.com>

#
# Following Best Practices and guidelines at:
# 	https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
# 	https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md
#

WORKDIR /home/node/app

# Best practice: run with NODE_ENV set to production
ENV NODE_ENV production

# Install dependencies
RUN npm install -g migrate-mongo
COPY package.json /home/node/app
COPY package-lock.json /home/node/app
RUN npm install

# Best practice: run as user 'node'
USER node

# Copy source dist; relies on .dockerignore
# NOTE: Must perform 'npm run build' beforehand
COPY . /home/node/app

# Run migrations
CMD [ "npm", "start" ]
