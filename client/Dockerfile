FROM node:16
# Working directory be app
WORKDIR /app
COPY ./package.json ./package.json
COPY . .
# Install dependencies
RUN npm install
# Copy source code

# Build React app
RUN npm run build
# Expose port 3000
EXPOSE 3000
# Start server
CMD ["npm", "start"]


