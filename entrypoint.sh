#!/bin/bash

if [ ! -f .env.development ]; then
    cp .env.example .env.development
fi

if [ ! -f .env.production ]; then
    cp .env.example .env.production
fi

if [ ! -d node_modules ]; then
    NODE_ENV=development yarn
fi

yarn run teletry:disable
yarn run develop
