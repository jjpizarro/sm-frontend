FROM node AS develpment
WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install
COPY . /app
EXPOSE 3000
CMD ["npm","start"]

FROM development AS build 
RUN npm run build

FROM nginx:alpine
ENV NODE_ENV production 

COPY --from=build /app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*

COPY --from=build /app/build .

ENTRYPOINT [ "ngnix","-g", "daemon off;" ]


