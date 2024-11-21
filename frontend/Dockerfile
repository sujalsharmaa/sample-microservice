FROM node:14
WORKDIR /app
COPY package.json .
RUN npm install
COPY frontend.js .
COPY . .
EXPOSE 3001
CMD ["node", "frontend.js"]