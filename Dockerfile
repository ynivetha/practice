FROM node:12-slim as build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g @angular/cli

RUN npm install

COPY . .

RUN ng build --prod --output-path=dist


FROM nginx:1.17-alpine 

COPY --from=build /usr/src/app/dist /usr/share/nginx/html

COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
