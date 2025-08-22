# Stage 1: Builder
FROM node:22.18.0-alpine AS builder

WORKDIR /app

# Install deps (including dev for build)
COPY package*.json ./
RUN npm ci

# Copy source
COPY . .

# Build Next.js
RUN npm run build

# Stage 2: Runner
FROM node:22.18.0-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production

# Install only production dependencies
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# Copy build output & public files
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3001
CMD ["npm", "start"]


























# # Stage 1: Build
# FROM node:22.18.0-alpine AS builder

# WORKDIR /app

# # Install dependencies
# COPY package*.json ./
# RUN npm install

# # Copy source code
# COPY . .

# # Build Next.js app
# RUN npm run build

# EXPOSE 3001

# CMD ["npm", "start"]
