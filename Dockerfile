# Stage 1: Build
FROM node:22.18.0-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build Next.js app
RUN npm run build

EXPOSE 3001

CMD ["npm", "start"]
