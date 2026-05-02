FROM node:22-alpine

# Install git and other build essentials if needed
RUN apk add --no-cache git libc6-compat

WORKDIR /app

# Copy package files and prisma schema first for better caching
COPY package.json ./
COPY prisma ./prisma/

# Install ALL dependencies (including devDependencies like typescript)
# This is necessary because Next.js needs them to build
RUN npm install

# Copy the source code
COPY . .

# Build the Next.js application
# Use --mount to securely load .env only during build time for NEXT_PUBLIC_ vars
RUN --mount=type=secret,id=env \
    export $(grep -v '^#' /run/secrets/env | xargs) && \
    npm run build

# Remove dev dependencies to keep image small
RUN npm prune --production

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

# Use a simpler start command since we already built
CMD ["npx", "next", "start", "-p", "3000"]
