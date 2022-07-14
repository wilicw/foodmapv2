FROM node:18-alpine AS builder
RUN apk add --no-cache libc6-compat

WORKDIR /app
COPY package.json ./
# RUN npm install -g pnpm
RUN yarn install
COPY . .
COPY .env.local .env.production
RUN yarn build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]