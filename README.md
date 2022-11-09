# Space Flight News, a Coodesh challenge

## Description
This is the back-end part of the challenge, it serves the front-end with articles. The articles are acquired from the Space Flight News API and seeded.

## Stacks and Technologies
- TypeScipt
- Node.js
- Express
- Docker
- Prisma
- Postgres

## How to Run
### Steps using localhost
- bash `npm i` in the terminal
- create a .env file
- write the following on it
    - `PORT=` port where the back-end will run on 
    - `POSTGRES_USERNAME=` username of your postgres (usually it's postgres)
    - `POSTGRES_PASSWORD` password of your postgres (if you don't know, it's probably postgres)
    - `POSTGRES_HOST=localhost`
    - `POSTGRES_PORT=5432` default port for postgres
    - `POSTGRES_DATABASE=` name you can choose for the database
    - `DATABASE_URL=postgresql://${POSTGRES_USERNAME}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DATABASE}?schema=public`
    - `SPACENEWS_URL=https://api.spaceflightnewsapi.net/v3/articles`

- bash `prisma migrate dev` in the terminal
- if it did not ran the seed, bash `npx prisma db seed` in the terminal
- last, bash `npm run dev` in the terminal

### Steps using Docker
- create a .env.docker file
- write the following on it
    - `PORT=` port where the Docker container will run on 
    - `POSTGRES_USERNAME=postgres`, you can change it
    - `POSTGRES_PASSWORD=postgres`, you can change it
    - `POSTGRES_HOST=database`, refers to the service in the docker-compose.yaml file
    - `POSTGRES_PORT=5432`, postgres container port
    - `POSTGRES_DATABASE=` name you can choose for the database
    - `DATABASE_URL=postgresql://${POSTGRES_USERNAME}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DATABASE}?schema=public`
    - `SPACENEWS_URL=https://api.spaceflightnewsapi.net/v3/articles`
- bash `docker-compose build` in the terminal
- bash `docker-compose up` in the terminal
- now you can access the server using `localhost:`(the port you chose)
- bash `docker-compose down` to take it down