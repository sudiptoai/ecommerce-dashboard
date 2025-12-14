export interface DashboardStats {
  totalRevenue: number;
  totalOrders: number;
  totalProducts: number;
  totalCustomers: number;
  revenueChange: number;
  ordersChange: number;
  productsChange: number;
  customersChange: number;
}

export interface SalesData {
  month: string;
  sales: number;
  revenue: number;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
  image: string;
}

export interface Order {
  id: string;
  customer: string;
  product: string;
  amount: number;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  date: string;
}

export interface WarehouseItem {
  id: number;
  productName: string;
  sku: string;
  quantity: number;
  location: string;
  lastRestocked: string;
}

export interface SalesByCategory {
  category: string;
  sales: number;
  revenue: number;
}

export interface UserStats {
  activeUsers: number;
  repeatUsers: number;
  newUsers: number;
}

export interface UserDemographic {
  name: string;
  value: number;
}

export interface Expense {
  category: string;
  amount: number;
  percentage: number;
}

export interface ExpenseDetail {
  id: number;
  category: string;
  totalAmount: number;
  percentage: number;
  items: number;
  lastUpdated: string;
}

export const dashboardStats: DashboardStats = {
  totalRevenue: 245680,
  totalOrders: 1543,
  totalProducts: 324,
  totalCustomers: 8924,
  revenueChange: 12.5,
  ordersChange: 8.2,
  productsChange: 3.1,
  customersChange: 15.3,
};

export const salesData: SalesData[] = [
  { month: 'Jan', sales: 156, revenue: 45200 },
  { month: 'Feb', sales: 189, revenue: 52400 },
  { month: 'Mar', sales: 203, revenue: 61300 },
  { month: 'Apr', sales: 178, revenue: 48900 },
  { month: 'May', sales: 234, revenue: 72100 },
  { month: 'Jun', sales: 267, revenue: 84500 },
  { month: 'Jul', sales: 289, revenue: 91200 },
  { month: 'Aug', sales: 312, revenue: 98700 },
  { month: 'Sep', sales: 298, revenue: 95300 },
  { month: 'Oct', sales: 334, revenue: 107400 },
  { month: 'Nov', sales: 356, revenue: 115800 },
  { month: 'Dec', sales: 401, revenue: 132500 },
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: 89.99,
    stock: 145,
    status: 'In Stock',
    image: '/placeholder.jpg',
  },
  {
    id: 2,
    name: 'Smart Watch',
    category: 'Electronics',
    price: 249.99,
    stock: 23,
    status: 'Low Stock',
    image: '/placeholder.jpg',
  },
  {
    id: 3,
    name: 'Laptop Stand',
    category: 'Accessories',
    price: 34.99,
    stock: 0,
    status: 'Out of Stock',
    image: '/placeholder.jpg',
  },
  {
    id: 4,
    name: 'USB-C Cable',
    category: 'Accessories',
    price: 12.99,
    stock: 567,
    status: 'In Stock',
    image: '/placeholder.jpg',
  },
  {
    id: 5,
    name: 'Mechanical Keyboard',
    category: 'Electronics',
    price: 129.99,
    stock: 89,
    status: 'In Stock',
    image: '/placeholder.jpg',
  },
];

export const orders: Order[] = [
  {
    id: 'ORD-001',
    customer: 'John Doe',
    product: 'Wireless Headphones',
    amount: 89.99,
    status: 'Delivered',
    date: '2024-12-10',
  },
  {
    id: 'ORD-002',
    customer: 'Jane Smith',
    product: 'Smart Watch',
    amount: 249.99,
    status: 'Shipped',
    date: '2024-12-11',
  },
  {
    id: 'ORD-003',
    customer: 'Bob Johnson',
    product: 'Mechanical Keyboard',
    amount: 129.99,
    status: 'Processing',
    date: '2024-12-12',
  },
  {
    id: 'ORD-004',
    customer: 'Alice Williams',
    product: 'USB-C Cable',
    amount: 12.99,
    status: 'Pending',
    date: '2024-12-13',
  },
  {
    id: 'ORD-005',
    customer: 'Charlie Brown',
    product: 'Laptop Stand',
    amount: 34.99,
    status: 'Cancelled',
    date: '2024-12-13',
  },
];

export const warehouseItems: WarehouseItem[] = [
  {
    id: 1,
    productName: 'Wireless Headphones',
    sku: 'WH-001',
    quantity: 145,
    location: 'Warehouse A - Aisle 3',
    lastRestocked: '2024-12-01',
  },
  {
    id: 2,
    productName: 'Smart Watch',
    sku: 'SW-002',
    quantity: 23,
    location: 'Warehouse A - Aisle 1',
    lastRestocked: '2024-11-28',
  },
  {
    id: 3,
    productName: 'Laptop Stand',
    sku: 'LS-003',
    quantity: 0,
    location: 'Warehouse B - Aisle 5',
    lastRestocked: '2024-10-15',
  },
  {
    id: 4,
    productName: 'USB-C Cable',
    sku: 'UC-004',
    quantity: 567,
    location: 'Warehouse A - Aisle 2',
    lastRestocked: '2024-12-05',
  },
  {
    id: 5,
    productName: 'Mechanical Keyboard',
    sku: 'MK-005',
    quantity: 89,
    location: 'Warehouse B - Aisle 3',
    lastRestocked: '2024-11-30',
  },
];

// Sales by Category Data
export const salesByCategory: SalesByCategory[] = [
  { category: 'Electronics', sales: 856, revenue: 189500 },
  { category: 'Accessories', sales: 432, revenue: 32400 },
  { category: 'Clothing', sales: 234, revenue: 18900 },
  { category: 'Home & Garden', sales: 178, revenue: 25600 },
  { category: 'Sports', sales: 123, revenue: 15800 },
];

// User Statistics
export const userStats: UserStats = {
  activeUsers: 4523,
  repeatUsers: 2891,
  newUsers: 1632,
};

// User Demographics by Age Range
export const userDemographicsByAge: UserDemographic[] = [
  { name: '18-24', value: 1245 },
  { name: '25-34', value: 2567 },
  { name: '35-44', value: 1834 },
  { name: '45-54', value: 1123 },
  { name: '55+', value: 1155 },
];

// User Demographics by Location
export const userDemographicsByLocation: UserDemographic[] = [
  { name: 'North America', value: 3456 },
  { name: 'Europe', value: 2234 },
  { name: 'Asia', value: 1876 },
  { name: 'South America', value: 876 },
  { name: 'Others', value: 482 },
];

// Expense Data
export const expenses: Expense[] = [
  { category: 'Marketing', amount: 45000, percentage: 30 },
  { category: 'Inventory', amount: 52500, percentage: 35 },
  { category: 'Shipping', amount: 30000, percentage: 20 },
  { category: 'Operations', amount: 15000, percentage: 10 },
  { category: 'Others', amount: 7500, percentage: 5 },
];

// Expense Details
export const expenseDetails: ExpenseDetail[] = [
  {
    id: 1,
    category: 'Marketing',
    totalAmount: 45000,
    percentage: 30,
    items: 45,
    lastUpdated: '2024-12-10',
  },
  {
    id: 2,
    category: 'Inventory',
    totalAmount: 52500,
    percentage: 35,
    items: 128,
    lastUpdated: '2024-12-12',
  },
  {
    id: 3,
    category: 'Shipping',
    totalAmount: 30000,
    percentage: 20,
    items: 856,
    lastUpdated: '2024-12-13',
  },
  {
    id: 4,
    category: 'Operations',
    totalAmount: 15000,
    percentage: 10,
    items: 23,
    lastUpdated: '2024-12-11',
  },
  {
    id: 5,
    category: 'Others',
    totalAmount: 7500,
    percentage: 5,
    items: 12,
    lastUpdated: '2024-12-09',
  },
];
