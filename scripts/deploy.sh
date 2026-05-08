#!/bin/bash

# Deploy pre-built image from DockerHub
# Run this on your SERVER - no other files needed

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

DOCKERHUB_USER="${DOCKERHUB_USER:-waqas33412345}"
VERSION="${1:-latest}"
IMAGE_NAME="waqasyounis.com"
CONTAINER_NAME="waqasyounis.com"
HOST_PORT=1234

echo -e "${BLUE}╔══════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║         CV Web - Production Deployment                   ║${NC}"
echo -e "${BLUE}╚══════════════════════════════════════════════════════════╝${NC}"
echo ""
echo -e "${YELLOW}Version:${NC} $VERSION"
echo -e "${YELLOW}Image:${NC} $DOCKERHUB_USER/$IMAGE_NAME:$VERSION"
echo -e "${YELLOW}Port:${NC} $HOST_PORT"
echo ""

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo -e "${RED}✗ Docker is not running.${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Docker is running${NC}"
echo ""

# Pull image
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}Pulling Image from DockerHub${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

docker pull "$DOCKERHUB_USER/$IMAGE_NAME:$VERSION" || {
    echo -e "${RED}✗ Failed to pull image${NC}"
    exit 1
}
echo -e "${GREEN}✓ Image pulled${NC}"
echo ""

# Stop old container
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}Stopping Current Deployment${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

docker stop "$CONTAINER_NAME" 2>/dev/null || true
docker rm "$CONTAINER_NAME" 2>/dev/null || true
echo -e "${GREEN}✓ Old container stopped${NC}"
echo ""

# Start new container
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}Starting New Deployment${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

docker run -d \
    --name "$CONTAINER_NAME" \
    --restart unless-stopped \
    -p "$HOST_PORT:3000" \
    -e NODE_ENV=production \
    "$DOCKERHUB_USER/$IMAGE_NAME:$VERSION" || {
    echo -e "${RED}✗ Failed to start container${NC}"
    exit 1
}
echo -e "${GREEN}✓ Container started${NC}"
echo ""

# Cleanup
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}Cleaning Up Old Images${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

docker image prune -f
echo -e "${GREEN}✓ Cleanup complete${NC}"
echo ""

echo -e "${GREEN}╔══════════════════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║              Deployment Complete!                        ║${NC}"
echo -e "${GREEN}╚══════════════════════════════════════════════════════════╝${NC}"
echo ""
echo -e "${GREEN}✓ Web:${NC} http://127.0.0.1:$HOST_PORT/"
echo ""
echo -e "${YELLOW}Check status:${NC} docker ps"
echo -e "${YELLOW}View logs:${NC} docker logs -f $CONTAINER_NAME"
echo ""
