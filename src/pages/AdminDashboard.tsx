import React, { useState, useEffect } from 'react';
import { Activity, Users, Package, AlertTriangle } from 'lucide-react';
import { getAdminStats, getUserActivities } from '../utils/adminData';
import { useHistoryStore } from '../stores/historyStore';
import DateRangeSelector from '../components/DateRangeSelector';
import DetailedUserTable from '../components/DetailedUserTable';
import DetailedPredictionTable from '../components/DetailedPredictionTable';
import LowStockTable from '../components/LowStockTable';
import TotalStockView from '../components/TotalStockView';
import { filterDataByDate } from '../utils/dateFilters';

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedDetail, setSelectedDetail] = useState<string | null>(null);
  const [dateRange, setDateRange] = useState('7d');
  
  const history = useHistoryStore((state) => state.entries);

  useEffect(() => {
    const fetchData = async () => {
      const statsData = await getAdminStats();
      const activitiesData = await getUserActivities();
      setStats(statsData);
      setActivities(activitiesData);
      setLoading(false);
    };

    fetchData();
  }, []);

  const filteredHistory = filterDataByDate(history, dateRange);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex space-x-4">
        <button
          onClick={() => {
            setActiveTab('overview');
            setSelectedDetail(null);
          }}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'overview'
              ? 'bg-blue-600 text-white'
              : 'bg-white/5 text-gray-300 hover:bg-white/10'
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => {
            setActiveTab('users');
            setSelectedDetail(null);
          }}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'users'
              ? 'bg-blue-600 text-white'
              : 'bg-white/5 text-gray-300 hover:bg-white/10'
          }`}
        >
          Users
        </button>
        <button
          onClick={() => {
            setActiveTab('predictions');
            setSelectedDetail(null);
          }}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'predictions'
              ? 'bg-blue-600 text-white'
              : 'bg-white/5 text-gray-300 hover:bg-white/10'
          }`}
        >
          Predictions
        </button>
        <button
          onClick={() => {
            setActiveTab('stock');
            setSelectedDetail(null);
          }}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'stock'
              ? 'bg-blue-600 text-white'
              : 'bg-white/5 text-gray-300 hover:bg-white/10'
          }`}
        >
          Stock
        </button>
      </div>

      <DateRangeSelector selectedRange={dateRange} onRangeChange={setDateRange} />

      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div 
            className="bg-white/10 backdrop-blur-md rounded-lg p-6 cursor-pointer hover:bg-white/20 transition-all"
            onClick={() => setActiveTab('predictions')}
          >
            <div className="flex items-center">
              <Activity className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-300">Total Predictions</p>
                <p className="text-2xl font-bold text-white">{filteredHistory.length}</p>
              </div>
            </div>
          </div>

          <div 
            className="bg-white/10 backdrop-blur-md rounded-lg p-6 cursor-pointer hover:bg-white/20 transition-all"
            onClick={() => setActiveTab('users')}
          >
            <div className="flex items-center">
              <Users className="h-8 w-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-300">Active Users</p>
                <p className="text-2xl font-bold text-white">{stats.activeUsers}</p>
              </div>
            </div>
          </div>

          <div 
            className="bg-white/10 backdrop-blur-md rounded-lg p-6 cursor-pointer hover:bg-white/20 transition-all"
            onClick={() => setActiveTab('stock')}
          >
            <div className="flex items-center">
              <Package className="h-8 w-8 text-yellow-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-300">Total Stock Items</p>
                <p className="text-2xl font-bold text-white">{stats.totalProduction}</p>
              </div>
            </div>
          </div>

          <div 
            className="bg-white/10 backdrop-blur-md rounded-lg p-6 cursor-pointer hover:bg-white/20 transition-all"
            onClick={() => setActiveTab('stock')}
          >
            <div className="flex items-center">
              <AlertTriangle className="h-8 w-8 text-red-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-300">Critical Stocks</p>
                <p className="text-2xl font-bold text-white">{stats.criticalStocks}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'users' && (
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-6">User Management</h2>
          <DetailedUserTable />
        </div>
      )}

      {activeTab === 'predictions' && (
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-6">Prediction History</h2>
          <DetailedPredictionTable />
        </div>
      )}

      {activeTab === 'stock' && (
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Stock Overview</h2>
            <TotalStockView />
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Critical Stock Alerts</h2>
            <LowStockTable />
          </div>
        </div>
      )}
    </div>
  );
}