# 🚀 LF Labs — Next.js Production Deployment

This is a production-ready **Next.js project** with a complete **CI/CD pipeline** using **GitHub Actions**, **PM2**, and **AWS EC2**.

---

## 📦 Tech Stack

- **Framework:** Next.js (TypeScript)
- **Server:** Ubuntu EC2 Instance
- **Process Manager:** PM2
- **CI/CD:** GitHub Actions
- **Deployment:** SSH + Rsync + PM2
- **Reverse Proxy (optional):** NGINX

---

## ✅ Features

- Automatic deployment to AWS EC2 on every `main` branch push
- PM2 process manager for zero-downtime restarts
- Remote `npm install` and `next build` on the server
- Automatic `pm2 save` for reboot persistence
- SSH keys and secrets managed securely in GitHub Actions
- Ready for NGINX + HTTPS (Let's Encrypt) if needed

---

## ⚙️ CI/CD Workflow

1. **Push to `main` branch**
   - GitHub Actions builds & lints the project
   - Rsync deploys the build to `/var/www/lflabs` on EC2

2. **On EC2 server**
   - Runs `npm install` & `npm run build`
   - Restarts the `next-app` process with PM2
   - Saves the PM2 process list with `pm2 save` for auto restart

---

## 📁 Project Structure

.
├── .github/workflows/ # GitHub Actions workflow files
├── app/ # Main application folder (Next.js 13+ app dir)
├── components/ # Reusable React components
├── config/ # Configuration files
├── hooks/ # Custom React hooks
├── libs/ # Libraries and utilities
├── locales/ # Localization files
├── providers/ # Context providers
├── public/img/ # Public static assets
├── styles/ # Stylesheets (CSS/SASS)
├── .env # Environment variables
├── .eslintrc.json # ESLint configuration
├── .gitattributes # Git attributes
├── .gitignore # Git ignore rules
├── .prettierrc # Prettier configuration
├── README.md # Project documentation
├── deploy.sh # Deployment script (optional)
├── next.config.mjs # Next.js configuration
├── package.json # Project dependencies and scripts
├── package-lock.json # NPM lock file
├── pnpm-lock.yaml # PNPM lock file (if used)
├── tsconfig.json # TypeScript configuration


---

## 🚀 Deployment Info

- **Server Path:** `/var/www/lflabs`
- **PM2 Process Name:** `next-app`
- **Environment:** Production
- **SSH:** Private key managed in GitHub Secrets

---

## ⚡ Commands

**Run locally**

npm install
npm run dev

---

**Build for production**

npm run build
npm run start

---

**Manage PM2 on server**

pm2 restart next-app
pm2 logs next-app
pm2 save

---

**Production Tips**

Use NGINX as a reverse proxy to forward ports 80/443 to localhost:3000

Secure with HTTPS (Let's Encrypt + Certbot)

Use a domain name for production access

Restrict SSH (port 22) to trusted IPs only

---

📢 Author
Built & maintained by uday patil
💪 DevOps | Next.js | AWS | CI/CD Automation
