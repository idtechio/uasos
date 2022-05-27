## Intro

UASOS project has four main parts:

1. frontend

- `expo`
- `next`

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

# React Native Next.js Monorepo

> Exploring universal apps (_native and web_) —[bootstrapped with solito](https://solito.dev/)

👾 [View the website](https://example.solito.dev)

- Select the folder `apps/next` as the root of your Next.js app on the Vercel setup.

## 📦 Included packages

- `solito` for cross-platform navigation ([Talk at Next.js Conf](https://www.youtube.com/watch?v=0lnbdRweJtA))
- Expo SDK
- Next.js
- React Navigation

## 🗂 Folder layout

- `apps` entry points for each app

  - `expo`
  - `next`

- `packages` shared packages across apps
  - `app` you'll be importing most files from `app/`
    - `features` (don't use a `screens` folder. organize by feature.)
    - `provider` (all the providers that wrap the app, and some no-ops for Web.)
    - `navigation` Next.js has a `pages/` folder. React Native doesn't. This folder contains navigation-related code for RN. You may use it for any navigation code, such as custom links.

You can add other folders inside of `packages/` if you know what you're doing and have a good reason to.

## 🏁 Getting started

```
yarn
yarn web
yarn native
```

## 🆕 Add new dependencies

<details>
<summary>Pure JS dependencies</summary>

If you're installing a JavaScript-only dependency that will be used across platforms, install it in `packages/app`:

```sh
cd packages/app
yarn add date-fns
cd ../..
yarn
```

</details>

<details>
<summary>Native dependencies</summary>

If you're installing a library with any native code, you must install it in `apps/expo`:

```sh
cd apps/expo
yarn add react-native-reanimated

cd ../..
yarn
```

You can also install the native library inside of `packages/app` if you want to get autoimport for that package inside of the `app` folder. However, you need to be careful and install the _exact_ same version in both packages. If the versions mismatch at all, you'll potentially get terrible bugs. This is a classic monorepo issue.

</details>
