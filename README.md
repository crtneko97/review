# review# Install dependencies
npm install

# Generate Prisma Client
npx prisma generate

# Run migrations
npx prisma migrate dev --name products

# Seed database
npx tsx prisma/seed.ts

# Start the development server
npm run dev
