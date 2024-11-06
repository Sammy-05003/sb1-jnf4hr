import React from 'react';
import { WEAPONS, AMMUNITION } from '../data/weapons';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

export default function TotalStockView() {
  const weaponsByType = WEAPONS.reduce((acc, weapon) => {
    acc[weapon.type] = (acc[weapon.type] || 0) + weapon.stock;
    return acc;
  }, {});

  const pieData = Object.entries(weaponsByType).map(([name, value]) => ({
    name,
    value
  }));

  const barData = WEAPONS.map(weapon => ({
    name: weapon.name,
    stock: weapon.stock,
    critical: weapon.criticalLevel,
    production: weapon.monthlyProduction
  }));

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/5 backdrop-blur-md rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-4">Stock Distribution by Type</h3>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                  outerRadius={150}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-4">Stock Levels by Weapon</h3>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" angle={-45} textAnchor="end" height={100} />
                <YAxis stroke="rgba(255,255,255,0.5)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    border: 'none',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Bar dataKey="stock" name="Current Stock" fill="#0088FE" />
                <Bar dataKey="critical" name="Critical Level" fill="#FF8042" />
                <Bar dataKey="production" name="Monthly Production" fill="#00C49F" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <h3 className="text-xl font-bold text-white mb-4">Complete Inventory</h3>
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Current Stock
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Critical Level
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Monthly Production
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {WEAPONS.map((weapon) => (
              <tr key={weapon.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {weapon.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {weapon.type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {weapon.stock}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {weapon.criticalLevel}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {weapon.monthlyProduction}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    weapon.stock <= weapon.criticalLevel
                      ? 'bg-red-500/20 text-red-400'
                      : 'bg-green-500/20 text-green-400'
                  }`}>
                    {weapon.stock <= weapon.criticalLevel ? 'Critical' : 'Normal'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}