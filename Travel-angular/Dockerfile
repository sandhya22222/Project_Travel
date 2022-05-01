FROM node as build-step

WORKDIR Travel-angular

COPY . .

RUN npm install

RUN npm run build

FROM nginx:alpine

COPY --from=build-step /Travel-angular/dist/* /use/share/nginx/html