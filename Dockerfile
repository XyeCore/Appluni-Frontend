# ===== STAGE 1: build =====
FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

# The build step will use the VITE_API_URL from env
RUN npm run build

# ===== STAGE 2: run with Nginx =====
FROM nginx:stable-alpine

# Accept build argument for API URL
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

# Remove default config
RUN rm /etc/nginx/conf.d/default.conf

# Add custom config
COPY nginx.conf /etc/nginx/conf.d

# Copy built files from previous stage
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# Print the VITE_API_URL to verify it's set correctly
RUN echo "VITE_API_URL is set to: $VITE_API_URL"
