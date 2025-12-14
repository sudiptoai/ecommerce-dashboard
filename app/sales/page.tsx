'use client';

import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { salesByCategory, salesData } from '@/lib/mockData';
import { ShoppingCart, DollarSign, TrendingUp, Package } from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  LineChart,
  Line,
  ComposedChart
} from 'recharts';

export default function SalesPage() {
  const totalSalesByCategory = salesByCategory.reduce((sum, cat) => sum + cat.sales, 0);
  const totalRevenue = salesByCategory.reduce((sum, cat) => sum + cat.revenue, 0);
  
  // Reusable tooltip formatter
  const formatTooltipValue = (value: number, name: string) => {
    if (name === 'Revenue ($)') {
      return [`$${value.toLocaleString()}`, name];
    }
    return [value.toLocaleString(), name];
  };
  
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Sales Analytics</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Detailed sales performance by product category
          </p>
        </div>

        {/* Sales Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card role="region" aria-label="Total sales">
            <CardContent className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Sales</p>
                <p className="text-2xl font-bold mt-2 text-gray-900 dark:text-gray-100">
                  {totalSalesByCategory.toLocaleString()}
                </p>
                <p className="text-xs text-gray-500 mt-1">All categories</p>
              </div>
              <div className="p-3 rounded-full bg-blue-100 text-blue-500">
                <ShoppingCart size={20} />
              </div>
            </CardContent>
          </Card>

          <Card role="region" aria-label="Total revenue">
            <CardContent className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Revenue</p>
                <p className="text-2xl font-bold mt-2 text-gray-900 dark:text-gray-100">
                  ${totalRevenue.toLocaleString()}
                </p>
                <p className="text-xs text-gray-500 mt-1">From all categories</p>
              </div>
              <div className="p-3 rounded-full bg-green-100 text-green-500">
                <DollarSign size={20} />
              </div>
            </CardContent>
          </Card>

          <Card role="region" aria-label="Average order value">
            <CardContent className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Avg Order Value</p>
                <p className="text-2xl font-bold mt-2 text-gray-900 dark:text-gray-100">
                  ${(totalRevenue / totalSalesByCategory).toFixed(2)}
                </p>
                <p className="text-xs text-gray-500 mt-1">Per transaction</p>
              </div>
              <div className="p-3 rounded-full bg-purple-100 text-purple-500">
                <TrendingUp size={20} />
              </div>
            </CardContent>
          </Card>

          <Card role="region" aria-label="Product categories">
            <CardContent className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Categories</p>
                <p className="text-2xl font-bold mt-2 text-gray-900 dark:text-gray-100">
                  {salesByCategory.length}
                </p>
                <p className="text-xs text-gray-500 mt-1">Active categories</p>
              </div>
              <div className="p-3 rounded-full bg-orange-100 text-orange-500">
                <Package size={20} />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sales by Category Bar Chart */}
        <Card role="region" aria-label="Sales by category chart">
          <CardHeader>
            <CardTitle>Sales by Product Category</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={salesByCategory}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="category" 
                  angle={-45}
                  textAnchor="end"
                  height={100}
                />
                <YAxis 
                  yAxisId="left"
                  orientation="left"
                  stroke="#8b5cf6"
                  label={{ value: 'Number of Sales', angle: -90, position: 'insideLeft' }}
                />
                <YAxis 
                  yAxisId="right"
                  orientation="right"
                  stroke="#3b82f6"
                  label={{ value: 'Revenue ($)', angle: 90, position: 'insideRight' }}
                />
                <Tooltip formatter={formatTooltipValue} />
                <Legend />
                <Bar 
                  yAxisId="left"
                  dataKey="sales" 
                  fill="#8b5cf6" 
                  name="Number of Sales"
                  aria-label="Sales by category bar chart"
                />
                <Bar 
                  yAxisId="right"
                  dataKey="revenue" 
                  fill="#3b82f6" 
                  name="Revenue ($)"
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Category Performance Table */}
        <Card role="region" aria-label="Category performance details">
          <CardHeader>
            <CardTitle>Category Performance Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full" role="table" aria-label="Sales by category table">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900 dark:text-gray-100" scope="col">
                      Category
                    </th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-gray-900 dark:text-gray-100" scope="col">
                      Sales Volume
                    </th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-gray-900 dark:text-gray-100" scope="col">
                      Revenue
                    </th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-gray-900 dark:text-gray-100" scope="col">
                      Avg Price
                    </th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-gray-900 dark:text-gray-100" scope="col">
                      % of Total Sales
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {salesByCategory
                    .sort((a, b) => b.revenue - a.revenue)
                    .map((category, index) => (
                      <tr 
                        key={category.category}
                        className={`border-b border-gray-100 dark:border-gray-800 ${
                          index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-700'
                        }`}
                      >
                        <td className="py-3 px-4 font-medium text-gray-900 dark:text-gray-100">
                          {category.category}
                        </td>
                        <td className="py-3 px-4 text-right text-gray-900 dark:text-gray-100">
                          {category.sales.toLocaleString()}
                        </td>
                        <td className="py-3 px-4 text-right text-gray-900 dark:text-gray-100">
                          ${category.revenue.toLocaleString()}
                        </td>
                        <td className="py-3 px-4 text-right text-gray-600 dark:text-gray-400">
                          ${(category.revenue / category.sales).toFixed(2)}
                        </td>
                        <td className="py-3 px-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <div className="w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                              <div 
                                className="bg-blue-500 h-2 rounded-full"
                                style={{ 
                                  width: `${(category.sales / totalSalesByCategory * 100)}%`
                                }}
                                role="progressbar"
                                aria-valuenow={Math.round(category.sales / totalSalesByCategory * 100)}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-label={`${Math.round(category.sales / totalSalesByCategory * 100)}% of total sales`}
                              />
                            </div>
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {((category.sales / totalSalesByCategory) * 100).toFixed(1)}%
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-gray-300 dark:border-gray-600 font-semibold">
                    <td className="py-3 px-4 text-gray-900 dark:text-gray-100">
                      Total
                    </td>
                    <td className="py-3 px-4 text-right text-gray-900 dark:text-gray-100">
                      {totalSalesByCategory.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 text-right text-gray-900 dark:text-gray-100">
                      ${totalRevenue.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 text-right text-gray-600 dark:text-gray-400">
                      ${(totalRevenue / totalSalesByCategory).toFixed(2)}
                    </td>
                    <td className="py-3 px-4 text-right text-gray-900 dark:text-gray-100">
                      100%
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Monthly Trend */}
        <Card role="region" aria-label="Monthly sales trend">
          <CardHeader>
            <CardTitle>Monthly Sales Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis 
                  yAxisId="left"
                  label={{ value: 'Sales Volume', angle: -90, position: 'insideLeft' }}
                />
                <YAxis 
                  yAxisId="right"
                  orientation="right"
                  label={{ value: 'Revenue ($)', angle: 90, position: 'insideRight' }}
                />
                <Tooltip formatter={formatTooltipValue} />
                <Legend />
                <Bar 
                  yAxisId="left"
                  dataKey="sales" 
                  fill="#8b5cf6" 
                  name="Sales Volume"
                />
                <Line 
                  yAxisId="right"
                  type="monotone"
                  dataKey="revenue" 
                  stroke="#3b82f6"
                  strokeWidth={2}
                  name="Revenue ($)"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
