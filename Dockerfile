# Etapa 1: Build de Angular
FROM node:18-alpine AS  build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --configuration production

# Etapa 2: Servir con NGINX
FROM nginx:alpine

# Copiar el build al directorio donde NGINX sirve archivos
COPY --from=build /app/dist/fury /usr/share/nginx/html

# (Opcional) Copiar configuración personalizada de nginx
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
