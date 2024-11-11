FROM node:20-alpine AS builder
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy dependencies
COPY package.json pnpm-lock.yaml .
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

RUN pnpm build
RUN pnpm prune --production

FROM node:20-alpine
WORKDIR /app

COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY package.json .

EXPOSE 3000

ENV NODE_ENV=production

CMD ["node", "build"]
