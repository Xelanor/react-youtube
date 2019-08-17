# The Node version that we'll be running for our version of React.
# You may have to search the Node directory for a version that fits
# the version of React you're using.
FROM node:latest

# Create a work directory and copy over our dependency manifest files.
RUN mkdir /usr/src/app

COPY . /usr/src/app

WORKDIR /usr/src/app


ENV PATH /usr/src/app/node_modules/ .bin:$PATH

RUN yarn

CMD ["npm", "start"]