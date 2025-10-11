# Srikari Enterprise - Next.js Product Management App

A modern Next.js application with Supabase integration for product management, featuring a public product listing page and an admin dashboard with full CRUD operations.

## Features

- **Home Page**: Public product listing with responsive design
- **Admin Dashboard**: Complete CRUD operations for products
- **Supabase Integration**: Real-time database with PostgreSQL
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **TypeScript**: Full type safety throughout the application

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Database Schema

The `products` table includes the following fields:

```sql
- id: UUID (Primary Key)
- name: VARCHAR(255) (Required)
- desc: TEXT (Nullable)
- qty: INTEGER (Required)
- mrp: DECIMAL(10,2) (Required)
- offer_price: DECIMAL(10,2) (Required)
- discount_percent: DECIMAL(5,2) (Required)
- image1: TEXT (Nullable)
- image2: TEXT (Nullable)
- image3: TEXT (Nullable)
- status: VARCHAR(20) (Required, 'active' or 'inactive')
- created_at: TIMESTAMP WITH TIME ZONE
- updated_at: TIMESTAMP WITH TIME ZONE
```

## Setup Instructions

### 1. Clone and Install Dependencies

```bash
cd srikari-entr
npm install
```

### 2. Set up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to Settings → API to get your project URL and anon key
3. Copy `.env.example` to `.env.local` and update the values:

```bash
cp .env.example .env.local
```

Update `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Set up Database

1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Run the SQL from `supabase-schema.sql` to create the products table and sample data

### 4. Run the Application

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
srikari-entr/
├── src/
│   ├── app/
│   │   ├── admin/
│   │   │   └── page.tsx          # Admin dashboard with CRUD
│   │   ├── globals.css           # Global styles
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Home page with product listing
│   └── lib/
│       └── supabase.ts           # Supabase client and types
├── supabase-schema.sql           # Database schema
├── .env.example                  # Environment variables template
└── README.md                     # This file
```

## Usage

### Home Page (`/`)
- Displays all active products in a responsive grid
- Shows product images, names, descriptions, prices, and stock
- Includes discount badges and status indicators
- Navigation to admin page

### Admin Page (`/admin`)
- **View Products**: Table view of all products with key information
- **Add Product**: Modal form to create new products
- **Edit Product**: Click edit icon to modify existing products
- **Delete Product**: Remove products with confirmation
- **Toggle Status**: Activate/deactivate products
- **Real-time Updates**: Changes reflect immediately

### Product Management Features

1. **Create**: Add new products with all required fields
2. **Read**: View products in both home page and admin table
3. **Update**: Edit any product field including status
4. **Delete**: Remove products permanently
5. **Status Management**: Toggle between active/inactive states

## API Integration

The app uses Supabase's real-time capabilities:
- Automatic updates when data changes
- Optimistic UI updates for better user experience
- Error handling for all database operations

## Customization

### Adding New Fields
1. Update the database schema in `supabase-schema.sql`
2. Update TypeScript types in `src/lib/supabase.ts`
3. Modify forms in `src/app/admin/page.tsx`
4. Update display components as needed

### Styling
- Modify `src/app/globals.css` for global styles
- Use Tailwind classes throughout components
- Custom utilities available for text truncation

### Authentication (Future Enhancement)
The current setup allows public access. To add authentication:
1. Enable Supabase Auth
2. Add authentication middleware
3. Protect admin routes
4. Add user management

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
- Netlify
- Railway
- DigitalOcean App Platform

## Environment Variables

Required environment variables:
- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For issues and questions:
1. Check the Supabase documentation
2. Review Next.js documentation
3. Open an issue in the repository

---

**Note**: This is a boilerplate application ready for customization. The database includes sample data for testing purposes.