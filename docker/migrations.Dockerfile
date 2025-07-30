FROM php:8.4-fpm-alpine

WORKDIR /app

RUN apk add --no-cache git unzip postgresql-dev

RUN docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql

RUN docker-php-ext-install pdo pdo_pgsql

RUN addgroup -g 1000 appgroup \
    && adduser -u 1000 -G appgroup -s /bin/sh -D appuser

RUN chown -R appuser:appgroup /app

USER appuser

COPY --chown=appuser:appgroup . .

ENTRYPOINT [ "php", "artisan", "migrate"  ]