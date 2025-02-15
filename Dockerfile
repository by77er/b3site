FROM node:22-alpine AS base
RUN npm install -g pnpm@10.4.0 

FROM base AS development-dependencies-env
WORKDIR /app
COPY . /app
RUN pnpm install --frozen-lockfile

FROM base AS production-dependencies-env
WORKDIR /app
COPY package.json pnpm-lock.yaml* /app/
RUN pnpm install --prod --frozen-lockfile

FROM base AS build-env
WORKDIR /app
COPY . /app/
COPY --from=development-dependencies-env /app/node_modules /app/node_modules
RUN pnpm run build

FROM base
WORKDIR /app
COPY package.json pnpm-lock.yaml* /app/
COPY --from=production-dependencies-env /app/node_modules /app/node_modules
COPY --from=build-env /app/build /app/build
RUN addgroup -S appgroup && adduser -S appuser -G appgroup && \
    chown -R appuser:appgroup /app
EXPOSE 3000
USER appuser
CMD ["pnpm", "run", "start"]
