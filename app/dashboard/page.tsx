'use client';

import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { dashboardStats, salesData } from '@/lib/mockData';
import { DollarSign, ShoppingCart, Package, Users, TrendingUp, TrendingDown } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function DashboardPage() {
  const stats = [
    {
      title: 'Total Revenue',
      value: `$${dashboardStats.totalRevenue.toLocaleString()}`,
      change: dashboardStats.revenueChange,
      icon: DollarSign,
      color: 'text-green-500',
    },
    {
      title: 'Total Orders',
      value: dashboardStats.totalOrders.toLocaleString(),
      change: dashboardStats.ordersChange,
      icon: ShoppingCart,
      color: 'text-blue-500',
    },
    {
      title: 'Total Products',
      value: dashboardStats.totalProducts.toLocaleString(),
      change: dashboardStats.productsChange,
      icon: Package,
      color: 'text-purple-500',
    },
    {
      title: 'Total Customers',
      value: dashboardStats.totalCustomers.toLocaleString(),
      change: dashboardStats.customersChange,
      icon: Users,
      color: 'text-orange-500',
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <header className="bg-white shadow">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            E-Commerce Dashboard
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              {session.user?.image && (
                <Image
                  src={session.user.image}
                  alt={session.user.name || 'User'}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />
              )}
              <div>
                <p className="text-sm font-medium text-gray-900">{session.user?.name}</p>
                <p className="text-xs text-gray-500">{session.user?.email}</p>
              </div>
            </div>
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 transition"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            const isPositive = stat.change >= 0;
            return (
              <Card key={stat.title}>
                <CardContent className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{stat.title}</p>
                    <p className="text-2xl font-bold mt-2 text-gray-900 dark:text-gray-100">
                      {stat.value}
                    </p>
                    <div className="flex items-center mt-2">
                      {isPositive ? (
                        <TrendingUp className="text-green-500" size={16} />
                      ) : (
                        <TrendingDown className="text-red-500" size={16} />
                      )}
                      <span
                        className={`text-sm ml-1 ${
                          isPositive ? 'text-green-500' : 'text-red-500'
                        }`}
                      >
                        {isPositive ? '+' : ''}{stat.change}%
                      </span>
                      <span className="text-sm text-gray-500 ml-1">vs last month</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-full bg-gray-100 dark:bg-gray-700 ${stat.color}`}>
                    <Icon size={24} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    name="Revenue ($)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sales Volume</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="sales" fill="#8b5cf6" name="Orders" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mt-8 rounded-lg bg-white p-6 shadow">
          <h2 className="text-xl font-bold text-gray-900">
            Welcome, {session.user?.name}!
          </h2>
          <p className="mt-2 text-gray-600">
            You have successfully logged in with Google SSO. This is your e-commerce dashboard
            where you can manage your products, orders, and customers.
          </p>
        </div>
    </DashboardLayout>
  );
}
