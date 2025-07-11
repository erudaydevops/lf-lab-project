LF Labs — Production-Ready Next.js Deployment

This repository contains a fully configured Next.js project with an automated CI/CD pipeline using GitHub Actions, PM2, and AWS EC2.

Technology Stack

Framework: Next.js (TypeScript)

Server: Ubuntu EC2 Instance

Process Manager: PM2

Continuous Deployment: GitHub Actions

Deployment Method: SSH, Rsync, PM2

Optional: NGINX for reverse proxy and SSL termination

Key Features

Automatic deployment on push to the main branch

Zero-downtime restarts using PM2

Remote build and dependency installation

PM2 process snapshot saved for persistent restarts

SSH keys and secrets securely managed via GitHub Secrets

Configurable for HTTPS using NGINX and Let's Encrypt

CI/CD Workflow

Code pushed to main triggers GitHub Actions.

The pipeline builds, lints, and deploys the application to the server using Rsync over SSH.

On the server, dependencies are installed and the Next.js application is rebuilt.

PM2 restarts the process and saves the current process list.

Project Structure

.
├── .github/workflows/ci-cd.yml
├── package.json
├── next.config.js
├── pages/
├── public/
├── components/
├── styles/
└── ...

Deployment Details

Remote Path: /var/www/lflabs

PM2 Process Name: next-app

Environment: Production

SSH Key: Managed via GitHub Secrets

Usage

Local Development

npm install
npm run dev

Production Build

npm run build
npm run start

Managing PM2 on Server

pm2 restart next-app
pm2 logs next-app
pm2 save

Recommendations

Use NGINX as a reverse proxy to handle ports 80/443.

Secure traffic with HTTPS using Let's Encrypt.

Restrict SSH access to trusted IP addresses.

Author

Developed and maintained by Toni Stark

License

This project is licensed under the ISC License.

Thank you for reviewing this project.
