import React from 'react';
import { WEAPONS, AMMUNITION } from '../data/weapons';

export default function LowStockTable() {
  const criticalWeapons = WEAPONS.filter(w => w.stock <= w.criticalLevel);
  const criticalAmmo = Object.values(AMMUNITION)
    .flat()
    .filter(a => a.stock <= a.criticalLevel);

  return (
    <div className="space-y-6">
      <div className="overflow-x-auto">
        <h3 className="text-xl font-bold text-white mb-4">Critical Weapons</h3>
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
            {criticalWeapons.map((weapon) => (
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
                  <span className="px-2 py-1 text-xs rounded-full bg-red-500/20 text-red-400">
                    Critical
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto">
        <h3 className="text-xl font-bold text-white mb-4">Critical Ammunition</h3>
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
            {criticalAmmo.map((ammo) => (
              <tr key={ammo.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {ammo.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {ammo.type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {ammo.stock}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {ammo.criticalLevel}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {ammo.monthlyProduction}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs rounded-full bg-red-500/20 text-red-400">
                    Critical
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