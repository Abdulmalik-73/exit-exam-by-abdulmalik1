# How to Deploy Ethiopian Exit Exam to Vercel

## Step-by-Step Deployment Guide

### Method 1: Deploy via Vercel Website (Easiest)

#### Step 1: Prepare Your Project
1. Make sure all your files are in one folder:
   - `index.html`
   - `questions.js`
   - `script.js`
   - `styles.css`
   - `README.md`

#### Step 2: Create a Vercel Account
1. Go to [https://vercel.com](https://vercel.com)
2. Click **"Sign Up"** (top right corner)
3. Sign up using one of these options:
   - GitHub (Recommended)
   - GitLab
   - Bitbucket
   - Email

#### Step 3: Deploy Your Project
1. After logging in, click **"Add New..."** button
2. Select **"Project"**
3. You'll see two options:
   - **Import Git Repository** (if you have GitHub/GitLab)
   - **Deploy from a template**

#### Step 4: Upload Your Files (Without Git)
If you don't have Git/GitHub:
1. Install Vercel CLI (Command Line Interface)
2. Open your terminal/command prompt
3. Navigate to your project folder:
   ```bash
   cd "C:\Users\Owner\Desktop\exit question123"
   ```
4. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```
5. Login to Vercel:
   ```bash
   vercel login
   ```
6. Deploy your project:
   ```bash
   vercel
   ```
7. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - What's your project's name? **ethiopian-exit-exam** (or any name)
   - In which directory is your code located? **./** (press Enter)
   - Want to override the settings? **N**

#### Step 5: Your Site is Live! 🎉
After deployment completes, you'll get a URL like:
```
https://ethiopian-exit-exam.vercel.app
```

---

### Method 2: Deploy via GitHub (Recommended for Updates)

#### Step 1: Create a GitHub Account
1. Go to [https://github.com](https://github.com)
2. Sign up for a free account

#### Step 2: Create a New Repository
1. Click the **"+"** icon (top right)
2. Select **"New repository"**
3. Repository name: **ethiopian-exit-exam**
4. Make it **Public**
5. Click **"Create repository"**

#### Step 3: Upload Your Files to GitHub
1. On the repository page, click **"uploading an existing file"**
2. Drag and drop all your files:
   - `index.html`
   - `questions.js`
   - `script.js`
   - `styles.css`
   - `README.md`
3. Click **"Commit changes"**

#### Step 4: Connect Vercel to GitHub
1. Go to [https://vercel.com](https://vercel.com)
2. Sign up/Login with **GitHub**
3. Click **"Add New..."** → **"Project"**
4. Click **"Import"** next to your repository
5. Click **"Deploy"**

#### Step 5: Automatic Deployments
Now, whenever you update files on GitHub, Vercel will automatically redeploy your site!

---

## Vercel Configuration (Optional)

Create a `vercel.json` file in your project folder:

```json
{
  "version": 2,
  "name": "ethiopian-exit-exam",
  "builds": [
    {
      "src": "index.html",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ]
}
```

---

## Custom Domain (Optional)

After deployment, you can add a custom domain:

1. Go to your project dashboard on Vercel
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain (e.g., `exitexam.com`)
4. Follow the DNS configuration instructions

---

## Troubleshooting

### Issue: "Command not found: vercel"
**Solution:** Install Node.js first from [https://nodejs.org](https://nodejs.org), then install Vercel CLI.

### Issue: "npm is not recognized"
**Solution:** Install Node.js which includes npm.

### Issue: Site not loading correctly
**Solution:** Make sure `index.html` is in the root folder, not in a subfolder.

---

## Quick Commands Reference

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy project
vercel

# Deploy to production
vercel --prod

# Check deployment status
vercel ls
```

---

## Free Tier Limits

Vercel's free tier includes:
- ✅ Unlimited deployments
- ✅ Automatic HTTPS
- ✅ 100 GB bandwidth per month
- ✅ Custom domains
- ✅ Automatic Git integration

Perfect for your exam project! 🎓

---

**Need Help?**
- Vercel Documentation: [https://vercel.com/docs](https://vercel.com/docs)
- Vercel Support: [https://vercel.com/support](https://vercel.com/support)
