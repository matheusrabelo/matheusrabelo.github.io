#!/bin/bash

if [ ! -f .env ]; then
    cp .env.example .env
fi

if [ ! -d node_modules ]; then
    NODE_ENV=development yarn
fi

yarn run teletry:disable
yarn run develop
