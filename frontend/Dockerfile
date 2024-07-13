# Use an official Node.js image as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --silent

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port on which the React app runs (typically 3000)
EXPOSE 3000

# Command to start the React application
CMD ["npm", "run", "start"]
