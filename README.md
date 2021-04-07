# serverless-tts-api

This is a minimal example of a _serverless_ Text to Speech API using [IBM Watson][] and [Vercel][].

[ibm watson]: https://vercel.com/docs/serverless-functions/introduction
[vercel]: https://vercel.com/docs/serverless-functions/introduction

## How to use

First you need to register at [IBM Cloud](https://cloud.ibm.com/), create a new [Text to Speech](https://cloud.ibm.com/catalog/services/text-to-speech) resource and take note of your `API_KEY` and `SERVICE_URL`.

Then you can [Run this locally](#run-this-locally) or [Deploy to Vercel](#deploy-to-vercel).

## Run this locally

Install the [Vercel CLI](https://vercel.com/cli) if you haven't already:

```sh
yarn global add vercel
```

Create an `.env` file like the following and fill it using your Text to Speech resource credentials:

```sh
API_KEY=YOUR API KEY
SERVICE_URL=YOUR SERVICE URL
```

Finally run the project:

```sh
vercel dev
```

This will start a local development server at `http://localhost:3000` and you can query the API at `/api/demo?text="say something"`.

## Deploy to Vercel

Use the button below and fill the environment variables with your `API_KEY` and `SERVICE_URL`.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fpiducancore%2Fserverless-tts-api&env=API_KEY,SERVICE_URL)
