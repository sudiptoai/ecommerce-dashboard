# E-Commerce Admin Dashboard

A comprehensive admin dashboard portal for e-commerce management, built with Next.js, TypeScript, and Tailwind CSS.

## Features

### Dashboard Overview
- **Real-time Metrics**: Track total revenue, orders, products, and customers
- **Performance Indicators**: View percentage changes compared to previous periods
- **Visual Analytics**: Interactive charts showing revenue trends and sales volume
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

### Product Management
- View all products with detailed information
- Filter products by category and status
- Track stock levels with visual indicators
- Manage product inventory (add, edit, delete)
- Status badges for In Stock, Low Stock, and Out of Stock items

### Order Management
- Comprehensive order tracking system
- Monitor order status (Pending, Processing, Shipped, Delivered, Cancelled)
- View customer details and order information
- Filter orders by status
- Quick actions for order updates

### Warehouse Management
- Real-time inventory monitoring
- Track stock levels across multiple warehouse locations
- Low stock alerts and notifications
- SKU-based product tracking
- Restock management with last restock dates
- Visual summary of total items, low stock, and out-of-stock items

### Analytics & Reports
- Product distribution by category (pie chart)
- Top performing months analysis
- Revenue vs target comparison
- Annual sales trends
- Key performance metrics:
  - Total annual sales
  - Total annual revenue
  - Average order value
  - Best performing month

## Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **UI**: Custom components with responsive design

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation
# E-Commerce Dashboard with Google SSO

A modern e-commerce dashboard application built with Next.js 15, TypeScript, and Tailwind CSS, featuring Google Single Sign-On (SSO) authentication using NextAuth.js.

## Features

- 🔐 **Google SSO Authentication** - Secure authentication using Google OAuth 2.0
- 🎨 **Modern UI** - Beautiful, responsive design with Tailwind CSS
- ⚡ **Next.js 15** - Built with the latest Next.js App Router
- 🔒 **Protected Routes** - Dashboard accessible only to authenticated users
- 📊 **Dashboard Overview** - Stats cards for sales, orders, and customers
- 👤 **User Profile** - Display user information from Google account

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18.x or higher
- npm or yarn package manager
- A Google Cloud Console account

## Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google+ API" and enable it
4. Create OAuth 2.0 credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "OAuth client ID"
   - Choose "Web application"
   - Add authorized redirect URIs:
     - For development: `http://localhost:3000/api/auth/callback/google`
     - For production: `https://yourdomain.com/api/auth/callback/google`
   - Save the Client ID and Client Secret

## Installation

1. Clone the repository:
```bash
git clone https://github.com/sudiptoai/ecommerce-dashboard.git
cd ecommerce-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
3. Create a `.env.local` file in the root directory:
```bash
cp .env.example .env.local
```

4. Update `.env.local` with your credentials:
```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

To generate a secure `NEXTAUTH_SECRET`, run:
```bash
openssl rand -base64 32
```

## Running the Application

### Development Mode

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the dashboard.

### Build for Production
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
ecommerce-dashboard/
├── app/
│   ├── dashboard/         # Dashboard overview page
│   ├── products/          # Product management page
│   ├── orders/            # Order tracking page
│   ├── warehouse/         # Warehouse management page
│   ├── analytics/         # Analytics and reports page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page (redirects to dashboard)
│   └── globals.css        # Global styles
├── components/
│   ├── ui/
│   │   ├── Card.tsx       # Reusable card component
│   │   └── Sidebar.tsx    # Navigation sidebar
│   └── DashboardLayout.tsx # Main layout wrapper
├── lib/
│   └── mockData.ts        # Mock data for demonstration
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies
```

## Features in Detail

### Dashboard Navigation
- **Sidebar Navigation**: Easy access to all sections
- **Mobile Responsive**: Collapsible menu for mobile devices
- **Active Route Highlighting**: Visual indication of current page

### Data Visualization
- **Line Charts**: Revenue trends over time
- **Bar Charts**: Sales volume and performance metrics
- **Pie Charts**: Product distribution analysis
- **Comparison Charts**: Revenue vs target analysis

### Status Indicators
- **Color-coded Badges**: Quick visual identification
- **Icon Support**: Enhanced clarity with contextual icons
- **Real-time Updates**: Reflects current system state

## Customization

### Adding New Pages
1. Create a new directory under `app/`
2. Add a `page.tsx` file with your component
3. Update navigation in `components/ui/Sidebar.tsx`

### Modifying Mock Data
Edit the data structures in `lib/mockData.ts` to reflect your business needs.

### Styling
The project uses Tailwind CSS. Customize the theme in `tailwind.config.ts`.

## Future Enhancements

- User authentication and role-based access control
- Real-time data synchronization with backend API
- Advanced filtering and search capabilities
- Export data to CSV/PDF
- Email notifications for low stock items
- Customer management module
- Invoice generation
- Multi-warehouse support
- Advanced analytics with predictive insights
- Dark mode toggle

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository.
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/
│   │           └── route.ts          # NextAuth configuration
│   ├── dashboard/
│   │   └── page.tsx                  # Protected dashboard page
│   ├── globals.css                   # Global styles
│   ├── layout.tsx                    # Root layout
│   ├── page.tsx                      # Login page
│   └── providers.tsx                 # Session provider
├── .env.example                      # Environment variables template
├── .gitignore
├── next.config.js                    # Next.js configuration
├── package.json
├── postcss.config.js                 # PostCSS configuration
├── tailwind.config.js                # Tailwind CSS configuration
└── tsconfig.json                     # TypeScript configuration
```

## Usage

1. **Login**: Click the "Sign in with Google" button on the home page
2. **Authenticate**: Log in with your Google account
3. **Dashboard**: After successful authentication, you'll be redirected to the dashboard
4. **Logout**: Click the "Sign Out" button in the dashboard header

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js v4
- **OAuth Provider**: Google OAuth 2.0

## Security Features

- Secure session management with NextAuth.js
- Environment variables for sensitive data
- Protected routes with authentication middleware
- Secure token handling

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Support

For issues and questions, please open an issue on the GitHub repository.

## Acknowledgments

- NextAuth.js for authentication solution
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
