#!/bin/bash

echo 'hello world'
case $1 in
    simulation-platform-prod)
        echo 'use prod'
        env=prod
        ;;
    simulation-platform-staging)
        echo 'use staging'
        env=staging
        ;;
    simulation-platform-dev)
        echo 'use dev'
        env=dev
        ;;
    *)
        echo 'env param is not defined'
        env=staging
        ;;
esac

cp -r test/*  test2/