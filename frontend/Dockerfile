    # Use an official Node runtime as a parent image
    FROM node:18-alpine

    # Set working directory
    WORKDIR /app

    # Copy package.json and package-lock.json
    COPY package*.json ./

    # Install app dependencies
    RUN npm install

    # Copy app source code
    COPY . .

    # Build the app
    # RUN npm run build

    # Expose the port the app runs on
    EXPOSE 5173

    # Define the command to run the app
    CMD ["npm", "run", "dev"]
