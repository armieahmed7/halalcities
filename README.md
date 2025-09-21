# HalalCities - Muslim-Friendly Travel & Living Platform

A comprehensive platform for Muslim travelers and digital nomads to find halal-friendly cities worldwide, inspired by nomads.com but tailored for the Muslim community.

## Features

### Core Features
- 🌍 **City Discovery** - Browse Muslim-friendly cities with detailed scores
- 🕌 **Mosque Finder** - Locate mosques with prayer times and facilities
- 🍖 **Halal Food Directory** - Find certified halal restaurants and shops
- 👥 **Community** - Connect with local Muslim communities
- 💰 **Cost of Living** - Detailed breakdowns for Muslim families
- 💻 **Digital Nomad Guide** - Coworking spaces and remote work info

### Muslim-Specific Features
- Prayer time integration for each city
- Qibla direction finder
- Halal certification verification
- Women-friendly indicators
- Islamic banking locations
- Muslim school directories
- Ramadan-specific information

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **UI Components**: Radix UI, Lucide Icons
- **State Management**: Zustand
- **Maps**: Mapbox GL JS (ready for integration)
- **Authentication**: NextAuth.js (ready for implementation)
- **Database**: PostgreSQL with Prisma (ready for implementation)
- **Deployment**: Vercel

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/halalcities-app.git
cd halalcities-app

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── api/               # API routes
│   └── city/[slug]/       # Dynamic city pages
├── components/            # React components
│   ├── city/             # City-specific components
│   ├── layout/           # Layout components
│   └── ui/               # Reusable UI components
├── data/                 # Mock data
├── lib/                  # Utility functions
└── types/                # TypeScript types
```

## API Endpoints

- `GET /api/cities` - List all cities with filters
- `GET /api/cities/[slug]` - Get city details
- `GET /api/restaurants` - Get halal restaurants (coming soon)
- `GET /api/mosques` - Get mosques (coming soon)

## Environment Variables

Create a `.env.local` file:

```env
# Mapbox (for maps integration)
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your_token_here

# Database (for production)
DATABASE_URL=postgresql://...

# Authentication (for production)
NEXTAUTH_SECRET=your_secret_here
NEXTAUTH_URL=http://localhost:3000
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Set environment variables
4. Deploy

```bash
npm run build
npm run start
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Data Sources

- City data: Community contributed
- Prayer times: Aladhan API (integration pending)
- Halal certifications: Various local authorities
- Restaurant data: Community verified

## Roadmap

- [x] MVP with core features
- [x] City detail pages with tabs
- [x] Community features
- [x] Cost of living calculator
- [ ] Mapbox integration
- [ ] User authentication
- [ ] Database integration
- [ ] Mobile app (React Native)
- [ ] Offline support
- [ ] Multi-language support

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by nomads.com
- Built for the global Muslim community
- Special thanks to all contributors

## Contact

- Website: [halalcities.com](https://halalcities.com) (coming soon)
- Email: info@halalcities.com
- Twitter: @halalcities

---

Made with ❤️ for the Muslim Ummah
