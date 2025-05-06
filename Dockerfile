# Etapa 1: Build de Angular
FROM node:18.20.2-alpine AS build

WORKDIR /app

# Copiar package.json y lock para instalar solo dependencias necesarias
COPY package*.json ./
RUN npm ci

# Copiar el resto del proyecto y compilar
COPY . .
RUN npm run build --configuration production

# Etapa 2: Servir con NGINX
FROM nginx:1.25.3-alpine

# Eliminar archivos por defecto de NGINX
RUN rm -rf /usr/share/nginx/html/*

# Copiar el build de Angular
COPY --from=build /app/dist/fury /usr/share/nginx/html

# Si usas rutas internas en Angular, necesitas este archivo
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto
EXPOSE 80

# Iniciar nginx
CMD ["nginx", "-g", "daemon off;"]
