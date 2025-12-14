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
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the dashboard.

### Build for Production

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
