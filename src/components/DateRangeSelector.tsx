import React from 'react';

interface DateRangeSelectorProps {
  selectedRange: string;
  onRangeChange: (range: string) => void;
}

export default function DateRangeSelector({ selectedRange, onRangeChange }: DateRangeSelectorProps) {
  const ranges = [
    { label: 'Last 7 Days', value: '7d' },
    { label: '1 Month', value: '1m' },
    { label: '3 Months', value: '3m' },
    { label: '6 Months', value: '6m' },
    { label: '1 Year', value: '1y' }
  ];

  return (
    <div className="flex space-x-2 mb-4">
      {ranges.map(({ label, value }) => (
        <button
          key={value}
          onClick={() => onRangeChange(value)}
          className={`px-4 py-2 rounded-lg text-sm ${
            selectedRange === value
              ? 'bg-blue-600 text-white'
              : 'bg-white/5 text-gray-300 hover:bg-white/10'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}