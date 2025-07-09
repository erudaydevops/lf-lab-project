#!/bin/bash
cd /home/ubuntu/LF-Labs
npm install
npm run build
pm2 restart app || pm2 start dist/index.js --name app
