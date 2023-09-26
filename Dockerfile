FROM node WORKDIR /app COPY package.json . RUN npm i COPY . .
EXPOSE 512735 CMD ["npm", "run", "dev"]
