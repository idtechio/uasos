FROM node:12-alpine AS build-env
ARG NEXT_PUBLIC_GA_ID
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Copy app and deps
FROM node:12-alpine
ARG NEXT_PUBLIC_GA_ID
WORKDIR /app
COPY --from=build-env /app .
RUN rm -rf node_modules && npm install --only=production

# Run Next.js
CMD ["npm", "run", "start"]
