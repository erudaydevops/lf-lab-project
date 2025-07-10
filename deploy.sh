#!/bin/bash
set -e

cd /home/ubuntu/lf-lab-project

echo "📦 Cleaning up old modules..."
rm -rf node_modules package-lock.json

echo "📦 Installing dependencies..."
npm install

echo "🔨 Building Next.js app..."
npm run build

echo "🚀 Restarting app with PM2..."
pm2 restart lf-lab-app || pm2 start npm --name "lf-lab-app" -- run start:prod

echo "✅ Deployment Complete"
