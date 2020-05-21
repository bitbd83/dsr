FROM node:10.11

WORKDIR /home/node
COPY --chown=node:node . .

USER node
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
