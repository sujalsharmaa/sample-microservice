FROM node:14
WORKDIR /app
COPY package.json .
RUN npm install
COPY frontend.js .
COPY public public/
EXPOSE 3001
CMD ["node", "frontend.js"]