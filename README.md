# Srikari Enterprise - E-commerce Platform

A modern Next.js e-commerce platform for Srikari Enterprise, featuring product management, customer inquiries, and admin dashboard.

## 🚀 Features

### Customer Features
- **Product Catalog**: Browse products with images, descriptions, and pricing
- **WhatsApp Integration**: Contact via WhatsApp for product inquiries
- **Responsive Design**: Mobile-friendly interface
- **Call Integration**: Direct calling functionality
- **Modern UI**: Beautiful gradient design with Tailwind CSS

### Admin Features
- **Product Management**: Full CRUD operations for products
- **Authentication**: Secure JWT-based admin login
- **Sort Order**: Control product display order
- **Real-time Updates**: Instant product updates
- **Mobile Responsive**: Admin panel works on all devices

### Technical Features
- **Next.js 14**: Latest React framework with App Router
- **Supabase**: Database and authentication
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **JWT Authentication**: Secure admin access
- **WhatsApp API**: Direct messaging integration

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd srikari-entr
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   JWT_SECRET=your_jwt_secret
   ADMIN_EMAIL=admin@srikari.com
   ADMIN_PASSWORD=RaviKiran@786
   ```

4. **Database Setup**
   - Run the SQL scripts in Supabase:
     - `supabase-schema.sql` - Creates the products table
     - `add-sort-order.sql` - Adds sort order functionality
     - `stationery-products-realistic.sql` - Adds sample products

5. **Start Development Server**
   ```bash
   npm run dev
   ```

6. **Access the Application**
   - Customer Site: http://localhost:3000
   - Admin Panel: http://localhost:3000/admin
   - Login: http://localhost:3000/login

## 🗄️ Database Schema

### Products Table
```sql
CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  qty INTEGER NOT NULL DEFAULT 0,
  mrp DECIMAL(10,2) NOT NULL,
  offer_price DECIMAL(10,2) NOT NULL,
  discount_percent DECIMAL(5,2) NOT NULL DEFAULT 0,
  image1 TEXT,
  image2 TEXT,
  image3 TEXT,
  status VARCHAR(20) DEFAULT 'active',
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 🔐 Authentication

### Admin Login
- **Email**: admin@srikari.com
- **Password**: RaviKiran@786
- **JWT Expiry**: 365 days
- **Storage**: localStorage

### Security Features
- JWT token verification
- Client-side authentication checks
- Protected admin routes
- Token expiration handling

## 📱 WhatsApp Integration

### Get in Touch Form
- **Purpose**: General business inquiries
- **Fields**: Name, Message (optional)
- **Default Message**: "Hi, I am {name}. Im intrested in your business, lets get in touch"
- **Extension**: Custom message added below default

### Product Inquiry Form
- **Purpose**: Specific product inquiries
- **Fields**: Name, Address, Phone Number
- **Message**: Includes product details and customer information

## 🎨 UI/UX Features

### Design System
- **Colors**: Blue gradient theme with green accents
- **Typography**: Modern font stack
- **Components**: Reusable React components
- **Icons**: Lucide React icon library
- **Animations**: Smooth transitions and hover effects

### Responsive Design
- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: sm, md, lg, xl
- **Flexible Layouts**: Grid and flexbox layouts
- **Touch Friendly**: Large buttons and touch targets

## 📊 Product Management

### Sort Order System
- **Purpose**: Control product display order
- **Implementation**: Integer-based sorting
- **Auto-fill**: New products get next available number
- **Admin Control**: Easy reordering through admin panel

### Product Features
- **Images**: Up to 3 images per product
- **Pricing**: MRP, Offer Price, Discount Percentage
- **Status**: Active/Inactive toggle
- **Inventory**: Quantity tracking
- **Descriptions**: Rich product descriptions

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
- **Netlify**: Static site deployment
- **Railway**: Full-stack deployment
- **AWS**: EC2 or Lambda deployment
- **DigitalOcean**: Droplet deployment

## 📁 Project Structure

```
srikari-entr/
├── src/
│   ├── app/
│   │   ├── admin/          # Admin dashboard
│   │   ├── api/            # API routes
│   │   ├── login/          # Login page
│   │   ├── globals.css     # Global styles
│   │   └── page.tsx        # Homepage
│   ├── lib/
│   │   ├── supabase.ts     # Database client
│   │   └── auth.ts         # Auth utilities
│   └── middleware.ts       # Route protection
├── public/                  # Static assets
├── supabase-schema.sql     # Database schema
├── stationery-products-realistic.sql # Sample data
└── README.md               # This file
```

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Code Style
- **ESLint**: Configured for Next.js
- **TypeScript**: Strict type checking
- **Prettier**: Code formatting (optional)
- **Conventional Commits**: Git commit messages

## 📈 Performance

### Optimizations
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting
- **Static Generation**: Pre-rendered pages
- **CDN**: Static asset delivery
- **Caching**: Browser and server-side caching

### Monitoring
- **Core Web Vitals**: Performance metrics
- **Error Tracking**: Client-side error monitoring
- **Analytics**: User behavior tracking
- **Uptime**: Service availability monitoring

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is proprietary software owned by Srikari Enterprise.

## 📞 Support

For technical support or questions:
- **Email**: admin@srikari.com
- **Phone**: +91 99850 01278
- **WhatsApp**: Business inquiries via website

## 🔄 Version History

### v1.0.0 (Current)
- Initial release
- Product catalog
- Admin dashboard
- WhatsApp integration
- Authentication system
- Sort order functionality
- Responsive design

---

**Built with ❤️ for Srikari Enterprise**