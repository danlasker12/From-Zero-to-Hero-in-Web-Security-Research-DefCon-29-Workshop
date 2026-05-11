# Node 16 is required: project depends on libxmljs@0.19.7, which uses
# v8::AccessorSignature (removed in Node 18+). Bullseye still has live apt repos.
FROM node:16-bullseye

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