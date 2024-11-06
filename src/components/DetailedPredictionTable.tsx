import React from 'react';
import { useHistoryStore } from '../stores/historyStore';

export default function DetailedPredictionTable() {
  const entries = useHistoryStore((state) => state.entries);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-700">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              User
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              State/Zone
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Weapon/Ammo
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Stock
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Depletion Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Recommended Order
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {entries.map((entry) => (
            <tr key={entry.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {new Date(entry.date).toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {entry.username}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {entry.state} - {entry.zone}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {entry.weapon} - {entry.ammo}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {entry.stock}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {entry.prediction.depletionDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {entry.prediction.recommendedOrder}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}