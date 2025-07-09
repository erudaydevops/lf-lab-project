#!/bin/bash
set -e  # exit if any command fails

# Go to project directory
cd /home/ubuntu/lf-lab-project

# Install dependencies
npm install

# Build Next.js app
npm run build

# Restart or start the app using PM2
pm2 restart lf-lab-app || pm2 start npm --name "lf-lab-app" -- run start:prod

echo "✅ Deployment Complete"
