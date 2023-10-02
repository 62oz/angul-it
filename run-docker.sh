#!/bin/bash

# Configuration
IMAGE_NAME="my-angular-app"
CONTAINER_NAME="my-angular-app-container"

# Check if the image exists
if [[ "$(docker images -q $IMAGE_NAME 2> /dev/null)" == "" ]]; then
  echo "Image does not exist. Building..."
  docker build -t $IMAGE_NAME .
else
  echo "Image exists. Skipping build..."
fi

# Check if a container is running and stop it
if [ "$(docker ps -q -f name=$CONTAINER_NAME)" ]; then
    echo "Stopping existing container..."
    docker stop $CONTAINER_NAME
fi

# Run the container
echo "Starting app..."
docker run --name $CONTAINER_NAME -p 80:80 -d $IMAGE_NAME

echo "App is running at http://localhost:80"
