## Intro

UASOS project has four main parts:

1. frontend
2. API
3. backend
4. database

Frontend and API are located in this repo. Backend and database DDL in another one.

You can develop frontend using API from ["dev"](https://dev.uasos.org/) server or setup backend and database in your local envinronment to run all parts localy.

For quick start ask your team leader about env file.

## 1. Frontend

First, run the development server for frontend:
`yarn install`

`cp .env_example .env`

`yarn dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

![image](https://user-images.githubusercontent.com/102538002/169299195-c2498fb1-5ae2-43cd-bdf6-6838f5ed8bf9.png)


## 2. API from "dev" server

You can use API from ["dev"](https://dev.uasos.org/) server changing
`NEXT_PUBLIC_DOMAIN` to `https://dev.uasos.org/`.

## 3-4. Local database and backend

You can clone and set up local database and backend functions from [idtechio/uasos-dev-infra](https://github.com/idtechio/uasos-backend).
How to do it? Read README file in that repository :)

Ensure that `.env` in this project contains:

- `LOCAL_PUBSUB_ENABLED="1"` and `LOCAL_PUBSUB_PORT=8060` to send messages to local backend functions instead of Google PubSub Service like on production
- `DB_HOST="127.0.0.1"` and `DB_PORT=5432` to connect to the local database
- `LOCAL_PUBSUB_PORT` should have the same value as `ROUTE_FNC_PORT` in backend env, and `DB_PORT` should be equal too

## 5. Identity Platform

We are using [Google Identity Platform] (https://cloud.google.com/identity-platform) for user authentication.

You need to set up a few values in `.env` to use Identity Platform on local envinronment.

For signing in/up you need:

- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`

To use API on localhost (for user token verification) you need:

- `FIREBASE_PROJECT_ID`
- `FIREBASE_CLIENT_EMAIL`
- `FIREBASE_PRIVATE_KEY`

Ask your team leader about it :)

## Learn More about Next.js

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
