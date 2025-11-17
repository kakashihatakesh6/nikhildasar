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

# --- REQUIRED FOR PERSISTENT LOGS ---
# Create logs folder that will be mapped to EC2 host
RUN mkdir -p /app/logs /app/logs/daily /app/logs/error && chmod -R 777 /app/logs

# Copy build output & public files
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./next.config.mjs

EXPOSE 3001
CMD ["npm", "start"]
#CMD ["npm", "start"]


























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
