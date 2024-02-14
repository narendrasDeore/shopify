FROM node:18-alpine

EXPOSE 3000

WORKDIR /app

COPY . .

ENV NODE_ENV=production \
    SHOPIFY_API_KEY=09341ab55f51f8980ad6dc857de5af64 \
    SHOPIFY_API_SECRET=5e214a42623652f3745a5e871f25d6cf \
    SCOPES=write_products

RUN npm install --omit=dev

RUN npm remove @shopify/app @shopify/cli

RUN npm run build

RUN rm -f prisma/dev.sqlite

CMD ["npm", "run", "docker-start"]
