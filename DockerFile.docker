# Step 1: Use an official Node.js runtime as the base image
FROM node:16-alpine as build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock) to the container
COPY package*.json ./

# Step 4: Install the app dependencies
RUN npm install

# Step 5: Copy the rest of your app's source code to the container
COPY . .

# Step 6: Build the React app for production
RUN npm run build

# Step 7: Use a lighter image to serve the built app
FROM nginx:alpine

# Step 8: Copy the build folder to the nginx server's public folder
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose port 80 for the app
EXPOSE 80

# Step 10: Start the nginx server to serve the app
CMD ["nginx", "-g", "daemon off;"]
