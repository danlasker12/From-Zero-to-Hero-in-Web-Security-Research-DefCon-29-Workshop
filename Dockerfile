# Use an LTS version of Node (e.g., Node 16)
FROM node:16

# Install build tools needed for compiling native modules
RUN apt-get update && \
    apt-get install -y build-essential python3 && \
    rm -rf /var/lib/apt/lists/*

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port your app listens on (4000 in this case)
EXPOSE 3000

# Start the application (using the "start" script from package.json)
CMD ["npm", "start"]