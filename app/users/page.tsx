'use client';

import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { userStats, userDemographicsByAge, userDemographicsByLocation } from '@/lib/mockData';
import { Users, UserCheck, UserPlus } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const COLORS = ['#3b82f6', '#8b5cf6', '#ef4444', '#10b981', '#f59e0b'];

export default function UsersPage() {
  // Transform data for Recharts compatibility
  const ageData = userDemographicsByAge.map(d => ({ ...d }));
  const locationData = userDemographicsByLocation.map(d => ({ ...d }));

  // Calculate total users once
  const totalUsers = userStats.activeUsers + userStats.repeatUsers + userStats.newUsers;

  const userSummaryStats = [
    {
      title: 'Active Users',
      value: userStats.activeUsers.toLocaleString(),
      icon: Users,
      color: 'text-blue-500',
      bgColor: 'bg-blue-100',
      description: 'Users active in the last 30 days',
    },
    {
      title: 'Repeat Users',
      value: userStats.repeatUsers.toLocaleString(),
      icon: UserCheck,
      color: 'text-green-500',
      bgColor: 'bg-green-100',
      description: 'Users with multiple purchases',
    },
    {
      title: 'New Users',
      value: userStats.newUsers.toLocaleString(),
      icon: UserPlus,
      color: 'text-purple-500',
      bgColor: 'bg-purple-100',
      description: 'Users joined in the last 30 days',
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">User Profiles</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Overview of user engagement and demographics
          </p>
        </div>

        {/* User Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {userSummaryStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title} role="region" aria-label={stat.title}>
                <CardContent className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 dark:text-gray-400">{stat.title}</p>
                    <p className="text-3xl font-bold mt-2 text-gray-900 dark:text-gray-100">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                      {stat.description}
                    </p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.bgColor} ${stat.color}`}>
                    <Icon size={24} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Demographics Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Age Demographics */}
          <Card role="region" aria-label="User demographics by age">
            <CardHeader>
              <CardTitle>User Demographics by Age Range</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                  <Pie
                    data={ageData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={(entry) => {
                      const data = entry as unknown as { name: string; percent: number };
                      return `${data.name} (${((data.percent || 0) * 100).toFixed(1)}%)`;
                    }}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                    aria-label="Age distribution pie chart"
                  >
                    {ageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Location Demographics */}
          <Card role="region" aria-label="User demographics by location">
            <CardHeader>
              <CardTitle>User Demographics by Geographical Location</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                  <Pie
                    data={locationData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={(entry) => {
                      const data = entry as unknown as { name: string; percent: number };
                      return `${data.name} (${((data.percent || 0) * 100).toFixed(1)}%)`;
                    }}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                    aria-label="Location distribution pie chart"
                  >
                    {locationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* User Engagement Summary */}
        <Card role="region" aria-label="User engagement statistics">
          <CardHeader>
            <CardTitle>User Engagement Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Users</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-1">
                  {totalUsers.toLocaleString()}
                </p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Retention Rate</p>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400 mt-1">
                  {((userStats.repeatUsers / totalUsers) * 100).toFixed(1)}%
                </p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">New User Rate</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-1">
                  {((userStats.newUsers / totalUsers) * 100).toFixed(1)}%
                </p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Engagement Score</p>
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-400 mt-1">
                  {((userStats.activeUsers / totalUsers) * 100).toFixed(1)}%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
