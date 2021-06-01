FROM ubuntu
RUN apt-get update
ARG JS_FILE=target/*.js
COPY ${JS_FILE} app.js
ENTRYPOINT ["javascript","-js","/app.js"]
