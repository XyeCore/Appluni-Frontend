# ===== СТАДИЯ 1: сборка =====
FROM node:20 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# ===== СТАДИЯ 2: запуск через Nginx =====
FROM nginx:stable-alpine

# Удалим стандартный конфиг
RUN rm /etc/nginx/conf.d/default.conf

# Добавим свой
COPY nginx.conf /etc/nginx/conf.d

# Копируем из предыдущего этапа билд
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]