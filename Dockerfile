# Use official Node.js LTS image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all project files into the container
COPY . .

# Expose your backend port
EXPOSE 5000

# Start the server
CMD ["node", "server.js"]
