# Deployment Pipeline Guide: Local → GitHub → Vercel → GoDaddy Domain

A beginner-friendly guide to deploy your Next.js project and connect your GoDaddy domain.

---

## Overview

```
Your Computer (local)  →  GitHub (code storage)  →  Vercel (hosting)  →  GoDaddy (domain)
     ↓                          ↓                        ↓                    ↓
  You code & push            Stores your code        Builds & serves       Points visitors
  with git                   in the cloud             your site            to your site
```

---

## Step 1: Push Your Project to GitHub

### 1.1 Create a GitHub Account (if you don't have one)
- Go to [github.com](https://github.com) and sign up

### 1.2 Create a New Repository on GitHub
1. Click the **+** in the top-right → **New repository**
2. Name it (e.g. `agentvocalquebec`)
3. Choose **Private** or **Public**
4. **Do NOT** check "Add a README" (you already have code)
5. Click **Create repository**

### 1.3 Push Your Local Code to GitHub

Open PowerShell in your project folder and run:

```powershell
# Initialize git (if not already done)
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit"

# Add GitHub as remote (replace YOUR_USERNAME and YOUR_REPO with your actual values)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub (main branch)
git branch -M main
git push -u origin main
```

**Example:** If your GitHub username is `franc` and repo is `agentvocalquebec`:
```powershell
git remote add origin https://github.com/franc/agentvocalquebec.git
```

---

## Step 2: Deploy to Vercel

### 2.1 Create a Vercel Account
- Go to [vercel.com](https://vercel.com)
- Sign up with your **GitHub account** (recommended – makes linking automatic)

### 2.2 Import Your Project
1. Click **Add New** → **Project**
2. You'll see your GitHub repositories – select `agentvocalquebec`
3. Vercel auto-detects Next.js – click **Deploy**
4. Wait 1–2 minutes – your site will be live at `https://agentvocalquebec.vercel.app` (or similar)

### 2.3 Automatic Deployments (The Pipeline!)
From now on:
- **Every push to `main`** on GitHub → Vercel automatically rebuilds and deploys
- Your local changes become live when you run `git push`

---

## Step 3: Connect Your GoDaddy Domain

### 3.1 Add Domain in Vercel
1. In Vercel, open your project
2. Go to **Settings** → **Domains**
3. Enter your domain (e.g. `agentvocalquebec.com` or `www.agentvocalquebec.com`)
4. Click **Add**
5. Vercel will show you DNS records to configure

### 3.2 Configure DNS in GoDaddy
1. Log in to [GoDaddy](https://godaddy.com)
2. Go to **My Products** → find your domain → **DNS** or **Manage DNS**
3. Add/update these records:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| **A** | `@` | `76.76.21.21` | 600 |
| **CNAME** | `www` | `cname.vercel-dns.com` | 600 |

**Notes:**
- `@` = root domain (agentvocalquebec.com)
- `www` = www.agentvocalquebec.com
- Vercel may show slightly different values – **always use what Vercel displays** in the Domains settings

### 3.3 Wait for DNS Propagation
- DNS changes can take 5 minutes to 48 hours (usually under 1 hour)
- Vercel will show a checkmark when the domain is connected

---

## Your Daily Workflow

```
1. Code locally (edit files in VS Code/Cursor)
2. Test: npm run dev
3. Commit: git add . && git commit -m "Describe your changes"
4. Push: git push
5. Vercel automatically deploys → Live in ~2 minutes!
```

---

## Quick Reference Commands

```powershell
# Check status
git status

# Add all changes
git add .

# Commit with message
git commit -m "Your message here"

# Push to GitHub (triggers Vercel deploy)
git push
```

---

## Troubleshooting

### "Permission denied" when pushing to GitHub
- Use a **Personal Access Token** instead of password
- GitHub → Settings → Developer settings → Personal access tokens → Generate new token
- Use the token as your password when `git push` asks for it

### Build fails on Vercel
- Check the build logs in Vercel dashboard
- Ensure `npm run build` works locally first
- Add a `.gitignore` so `node_modules` is not pushed (Next.js projects usually have this)

### Domain not working
- Verify DNS records in GoDaddy match exactly what Vercel shows
- Wait longer for propagation (up to 48h)
- Use [whatsmydns.net](https://www.whatsmydns.net) to check if DNS has propagated

---

## Summary Checklist

- [ ] GitHub account created
- [ ] Repository created on GitHub
- [ ] Code pushed to GitHub
- [ ] Vercel account created (with GitHub)
- [ ] Project imported and deployed on Vercel
- [ ] Domain added in Vercel
- [ ] DNS configured in GoDaddy
- [ ] Domain verified in Vercel
