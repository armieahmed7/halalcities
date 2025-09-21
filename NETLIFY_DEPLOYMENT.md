# Quick Netlify Deployment Instructions

## Environment Variables to Add in Netlify

Go to Site Settings → Environment Variables and add:

```
NEXT_PUBLIC_SUPABASE_URL=https://brnygjpmuzwonqfanmms.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJybnlnanBtdXp3b25xZmFubW1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg0ODcxMDQsImV4cCI6MjA3NDA2MzEwNH0.ByelxW9sFrnqCDwPc-3xlKkg-8nVaniKaPXsx_3wcAg
DATABASE_URL=postgresql://postgres.brnygjpmuzwonqfanmms:Cricketer89.@aws-0-us-west-1.pooler.supabase.com:6543/postgres?pgbouncer=true
NODE_VERSION=18
```

## Build Settings

- Build command: `npm run build`
- Publish directory: `.next`
- Functions directory: `netlify/functions` (auto-detected)

## After Deployment

1. Visit your site at: https://[your-site-name].netlify.app
2. To seed the database with sample data:
   - Install Node.js locally
   - Run: `npm install`
   - Run: `node scripts/seed-supabase.js`

## Custom Domain

1. Go to Domain Settings in Netlify
2. Add your custom domain
3. Follow DNS instructions

That's it! Your site should be live in about 2-3 minutes.