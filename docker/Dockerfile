FROM registry.digiu.ai/base/node/tars-cli:latest as builder
WORKDIR /app
ADD . .
RUN /node_modules/tars-cli/bin/tars.js build -r

FROM nginx:1.21.1
COPY --from=builder /app/builds/ /usr/share/nginx/html/
