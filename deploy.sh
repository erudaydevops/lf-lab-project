#!/bin/bash

# Go to project directory
cd /home/ubuntu/LF-Labs

# Install dependencies
npm install

# Build Next.js app
npm run build

# Restart or start the app with PM2
pm2 restart next-app || pm2 start npm --name "next-app" -- run start:prod
