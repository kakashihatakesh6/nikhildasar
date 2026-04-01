# Stage 1: Builder
FROM node:24-alpine AS builder

WORKDIR /app

# Install deps (including dev for build)
COPY package*.json ./
RUN npm install
#RUN npm ci

# Copy source
COPY . .

# Build Next.js
RUN npm run build

# Stage 2: Runner
FROM node:24-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production
ENV TZ=Etc/UTC

# Install only production dependencies
COPY package*.json ./
#RUN npm ci --only=production && npm cache clean --force
RUN npm install --only=production && npm cache clean --force

# --- REQUIRED FOR PERSISTENT LOGS ---
# Create logs folder that will be mapped to EC2 host
RUN mkdir -p /app/logs/daily /app/logs/error && chmod -R 777 /app/logs

# Copy build output & public files
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./next.config.mjs

EXPOSE 3001
CMD ["npm", "start"]