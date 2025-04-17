FROM nginx:alpine

# Copiar arquivos do projeto para o diretório de publicação do Nginx
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY img/ /usr/share/nginx/html/img/

# Expor a porta 80
EXPOSE 80

# Comando para iniciar o Nginx em primeiro plano
CMD ["nginx", "-g", "daemon off;"] 