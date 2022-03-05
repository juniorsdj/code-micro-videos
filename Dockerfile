FROM node:14.15.4-slim

USER node
WORKDIR /home/node/app

RUN yarn

CMD ["tail", "-f", "/dev/null"]