FROM node:20-alpine

# create app directory
WORKDIR /app

# install dependencies
COPY package*.json ./
RUN npm ci --only=production

# copy source
COPY src ./src

# expose port
EXPOSE 3000

# start app
CMD ["node", "src/app.js"]
