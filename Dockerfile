FROM node:18-alpine AS base

FROM base AS deps

WORKDIR /app

COPY package.json ./

RUN npm install

FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN npm run build

FROM base AS runner

WORKDIR /app

RUN addgroup --system --gid 1001 passwordlessSampleApp

RUN adduser --system --uid 1001 passwordlessSampleAppUser

COPY --from=builder --chown=passwordlessSampleAppUser:passwordlessSampleApp /app/package.json ./package.json

COPY --from=builder --chown=passwordlessSampleAppUser:passwordlessSampleApp . .

USER passwordlessSampleAppUser

EXPOSE 3101

#CMD ["node", "server.js"]
