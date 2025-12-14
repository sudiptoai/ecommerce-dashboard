'use client';

import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { salesData, products } from '@/lib/mockData';
import { PieChart, Pie, Cell, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function AnalyticsPage() {
  // Category distribution
  const categoryData = products.reduce((acc, product) => {
    const existing = acc.find(item => item.name === product.category);
    if (existing) {
      existing.value += 1;
    } else {
      acc.push({ name: product.category, value: 1 });
    }
    return acc;
  }, [] as { name: string; value: number }[]);

  const COLORS = ['#3b82f6', '#8b5cf6', '#ef4444', '#10b981', '#f59e0b'];

  // Monthly comparison data (comparing recent months)
  const comparisonData = salesData.slice(-6).map(item => ({
    month: item.month,
    revenue: item.revenue,
    target: item.revenue * 0.9, // Assuming target is 90% of actual
  }));

  // Top performing months
  const topMonths = [...salesData]
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, 5)
    .map(item => ({
      month: item.month,
      revenue: item.revenue,
    }));

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Analytics & Reports</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Detailed insights and performance metrics
          </p>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Category Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Product Distribution by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} (${((percent || 0) * 100).toFixed(0)}%)`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Top Performing Months */}
          <Card>
            <CardHeader>
              <CardTitle>Top 5 Revenue Months</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={topMonths} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="month" type="category" width={50} />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="#10b981" name="Revenue ($)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Revenue vs Target */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Revenue vs Target (Last 6 Months)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={comparisonData}>
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
                    name="Actual Revenue ($)"
                  />
                  <Line
                    type="monotone"
                    dataKey="target"
                    stroke="#ef4444"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    name="Target ($)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Annual Trend */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Annual Sales Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" orientation="left" stroke="#8b5cf6" />
                  <YAxis yAxisId="right" orientation="right" stroke="#3b82f6" />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="sales" fill="#8b5cf6" name="Sales Volume" />
                  <Bar yAxisId="right" dataKey="revenue" fill="#3b82f6" name="Revenue ($)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Annual Sales</p>
              <p className="text-2xl font-bold mt-2 text-gray-900 dark:text-gray-100">
                {salesData.reduce((sum, item) => sum + item.sales, 0).toLocaleString()}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Annual Revenue</p>
              <p className="text-2xl font-bold mt-2 text-gray-900 dark:text-gray-100">
                ${salesData.reduce((sum, item) => sum + item.revenue, 0).toLocaleString()}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400">Average Order Value</p>
              <p className="text-2xl font-bold mt-2 text-gray-900 dark:text-gray-100">
                $
                {(
                  salesData.reduce((sum, item) => sum + item.revenue, 0) /
                  salesData.reduce((sum, item) => sum + item.sales, 0)
                ).toFixed(2)}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400">Best Month</p>
              <p className="text-2xl font-bold mt-2 text-gray-900 dark:text-gray-100">
                {topMonths[0].month}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
