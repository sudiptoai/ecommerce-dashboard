'use client';

import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { expenses, expenseDetails } from '@/lib/mockData';
import { DollarSign, TrendingDown } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const COLORS = ['#3b82f6', '#8b5cf6', '#ef4444', '#10b981', '#f59e0b'];

export default function ExpensesPage() {
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  
  // Transform data for Recharts compatibility
  const expensesData = expenses.map(expense => ({
    ...expense,
    name: expense.category
  }));

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Expense Management</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Track and analyze business expenses by category
          </p>
        </div>

        {/* Total Expenses Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card role="region" aria-label="Total expenses">
            <CardContent className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Expenses</p>
                <p className="text-3xl font-bold mt-2 text-gray-900 dark:text-gray-100">
                  ${totalExpenses.toLocaleString()}
                </p>
                <p className="text-sm text-gray-500 mt-2">Current period</p>
              </div>
              <div className="p-3 rounded-full bg-red-100 text-red-500">
                <DollarSign size={24} />
              </div>
            </CardContent>
          </Card>

          <Card role="region" aria-label="Average expense per category">
            <CardContent className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Average Per Category</p>
                <p className="text-3xl font-bold mt-2 text-gray-900 dark:text-gray-100">
                  ${(totalExpenses / expenses.length).toLocaleString()}
                </p>
                <p className="text-sm text-gray-500 mt-2">Across {expenses.length} categories</p>
              </div>
              <div className="p-3 rounded-full bg-orange-100 text-orange-500">
                <TrendingDown size={24} />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Expense Donut Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card role="region" aria-label="Expenses by category chart">
            <CardHeader>
              <CardTitle>Expenses by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={expensesData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={(entry) => {
                      const data = entry as unknown as { category: string; percentage: number };
                      return `${data.category} (${data.percentage}%)`;
                    }}
                    outerRadius={120}
                    innerRadius={70}
                    fill="#8884d8"
                    dataKey="amount"
                    aria-label="Expense distribution donut chart"
                  >
                    {expensesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value: number) => `$${value.toLocaleString()}`}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Expense Breakdown Cards */}
          <Card role="region" aria-label="Expense breakdown">
            <CardHeader>
              <CardTitle>Expense Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {expenses.map((expense, index) => (
                  <div 
                    key={expense.category}
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                        aria-hidden="true"
                      />
                      <span className="font-medium text-gray-900 dark:text-gray-100">
                        {expense.category}
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900 dark:text-gray-100">
                        ${expense.amount.toLocaleString()}
                      </p>
                      <p className="text-sm text-gray-500">
                        {expense.percentage}% of total
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Expense Categories Table */}
        <Card role="region" aria-label="Expense categories details">
          <CardHeader>
            <CardTitle>Expense Categories Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full" role="table" aria-label="Expense categories table">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900 dark:text-gray-100" scope="col">
                      Category
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900 dark:text-gray-100" scope="col">
                      Total Amount
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900 dark:text-gray-100" scope="col">
                      Percentage
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900 dark:text-gray-100" scope="col">
                      Items
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900 dark:text-gray-100" scope="col">
                      Last Updated
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {expenseDetails.map((detail, index) => (
                    <tr 
                      key={detail.id}
                      className={`border-b border-gray-100 dark:border-gray-800 ${
                        index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-700'
                      }`}
                    >
                      <td className="py-3 px-4 text-gray-900 dark:text-gray-100">
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: COLORS[index % COLORS.length] }}
                            aria-hidden="true"
                          />
                          <span className="font-medium">{detail.category}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-gray-900 dark:text-gray-100">
                        ${detail.totalAmount.toLocaleString()}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-gray-200 dark:bg-gray-600 rounded-full h-2 max-w-[100px]">
                            <div 
                              className="h-2 rounded-full"
                              style={{ 
                                width: `${detail.percentage}%`,
                                backgroundColor: COLORS[index % COLORS.length]
                              }}
                              role="progressbar"
                              aria-valuenow={detail.percentage}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              aria-label={`${detail.percentage}% of total expenses`}
                            />
                          </div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {detail.percentage}%
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                        {detail.items}
                      </td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                        {new Date(detail.lastUpdated).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-gray-300 dark:border-gray-600 font-semibold">
                    <td className="py-3 px-4 text-gray-900 dark:text-gray-100">
                      Total
                    </td>
                    <td className="py-3 px-4 text-gray-900 dark:text-gray-100">
                      ${expenseDetails.reduce((sum, detail) => sum + detail.totalAmount, 0).toLocaleString()}
                    </td>
                    <td className="py-3 px-4 text-gray-900 dark:text-gray-100">
                      100%
                    </td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                      {expenseDetails.reduce((sum, detail) => sum + detail.items, 0)}
                    </td>
                    <td className="py-3 px-4"></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
