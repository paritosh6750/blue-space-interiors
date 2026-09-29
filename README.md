# Blue Space Interiors — Full-Stack Web Application

A full-stack turnkey architectural and interior design web application built for **Blue Space Interiors**, Thane, Maharashtra.

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 16 (App Router, Turbopack, React 19)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4 with custom brand system (`#3154A5` luxury light palette)
- **Database**: [SQLite](https://www.sqlite.org/) managed via [Prisma ORM](https://www.prisma.io/)
- **Telemetry**: Real-time unique visitor sessions and pageview tracking
- **Icons**: [Lucide React](https://lucide.dev/)
- **Analytics Ready**: Raw SQL tables structured for direct ingestion into **Power BI** dashboards

---

## Project Structure

```
blue-space-interiors/
├── prisma/
│   ├── schema.prisma        # Database schema (VisitorSession, PageView, LeadInquiry, etc.)
│   ├── seed.ts              # Initial data seed (Team members & curated projects)
│   └── dev.db               # Local SQLite database
├── public/                  # Static assets (brand logos, icons, robots.txt)
├── src/
│   ├── app/
│   │   ├── page.tsx         # Home page (Thane SEO optimized, 5-pillar showcase)
│   │   ├── about/           # About Us & leadership
│   │   ├── turnkey-services/# 5-stage turnkey roadmap
│   │   ├── portfolio/       # Curated project showcase
│   │   ├── contact/         # Consultation booking & coordinates
│   │   ├── admin/           # Secure Admin Portal
│   │   │   ├── page.tsx     # Admin inquiries table & KPIs
│   │   │   └── login/       # Restricted authentication screen
│   │   ├── actions/         # Server Actions (inquiry submission, admin auth, tracker)
│   │   └── api/tracker/     # Telemetry counter API
│   ├── components/
│   │   ├── admin/           # AdminDashboard & AdminLoginForm
│   │   ├── Navbar.tsx       # Sticky navigation & top credentials ribbon
│   │   ├── Footer.tsx       # Value props, studio contacts, & live visitor counter
│   │   ├── ContactForm.tsx  # Dynamic consultation request form
│   │   ├── BrandLogo.tsx    # Responsive vector brand identity
│   │   └── VisitorCounter.tsx# Live telemetry widget
│   └── lib/
│       ├── prisma.ts        # Prisma client singleton
│       └── adminAuth.ts     # SHA-256 HMAC session verification
├── .env.example             # Environment template
└── package.json
```

---

## Quick Start (Local Setup)

### 1. Prerequisites
- **Node.js**: v18.18+ or v20+ installed ([nodejs.org](https://nodejs.org/))
- **Git** installed

### 2. Install Dependencies
```bash
npm install
```

### 3. Initialize SQLite Database & Seed Data
```bash
npx prisma db push
npx prisma db seed
```

### 4. Run Development Server
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## Deployment Options

### Option 1: Deploy to Vercel (Recommended & Easiest)

Vercel is the creator of Next.js and provides instant global hosting with automatic SSL:

1. **Push code to GitHub**:
   ```bash
   git add .
   git commit -m "Deploy Blue Space Interiors web application"
   git branch -M main
   # Create a repository on GitHub (github.com/new) and run:
   git remote add origin https://github.com/<YOUR_USERNAME>/blue-space-interiors.git
   git push -u origin main
   ```
2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
   - Import your GitHub repository.
   - Click **"Deploy"**. Vercel will automatically run `npm run build`.

> **Note on Database for Vercel**: 
> Vercel functions run in a serverless, read-only file system. To keep inquiries persistent on Vercel:
> - You can connect a free cloud PostgreSQL database (like [Neon.tech](https://neon.tech) or [Supabase.com](https://supabase.com)) by changing `provider = "postgresql"` in `prisma/schema.prisma` and adding `DATABASE_URL` in Vercel project settings.
> - Or use [Turso](https://turso.tech/) (free serverless SQLite / libSQL compatible with Prisma).

---

### Option 2: Deploy to Render / Railway (Zero Database Changes)

Platforms like **Render** or **Railway** support persistent disks, meaning the local SQLite database works out of the box with zero external configuration!

#### Deploying on Render ([render.com](https://render.com)):
1. Create a **New Web Service** and connect your GitHub repository.
2. Settings:
   - **Environment**: `Node`
   - **Build Command**: `npm install && npx prisma db push && npx prisma db seed && npm run build`
   - **Start Command**: `npm run start`
3. Add a **Persistent Disk** mounted at `/prisma` to ensure your SQLite `dev.db` file is permanently saved across server restarts.

#### Deploying on Railway ([railway.app](https://railway.app)):
1. Create a **New Project** ➔ **Deploy from GitHub repo**.
2. Railway automatically detects Next.js and deploys it in minutes.
3. Attach a volume for `/prisma` to persist SQLite data.

---

### Option 3: Deploy on VPS (Hostinger, DigitalOcean, AWS, Ubuntu)

If you have a Linux VPS:

```bash
# Clone project
git clone <YOUR_REPO_URL>
cd blue-space-interiors

# Install and build
npm install
npx prisma db push
npx prisma db seed
npm run build

# Start with PM2 process manager
npm install -g pm2
pm2 start npm --name "bluespace" -- start

# Configure NGINX reverse proxy to port 3000 and enable Certbot SSL
```

---

## Power BI Integration

All contact submissions and visitor sessions are stored in raw SQL tables (`LeadInquiry`, `VisitorSession`, `PageView`).

1. Open **Power BI Desktop**.
2. Select **Get Data** ➔ **ODBC** or **SQLite / SQLite ODBC Driver**.
3. Select `prisma/dev.db` or export data from the Admin Portal via the **"Export CSV (Power BI / Excel)"** button.
4. Refresh dashboards on schedule for lead conversion funnel reports and footfall trends.
