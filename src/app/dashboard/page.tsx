import React from 'react';

// Mock Telemetry Data
interface PartTelemetry {
  sku: string;
  name: string;
  location: string;
  status: 'In Transit' | 'Warehouse' | 'Delayed';
  lastUpdated: string;
}

const mockParts: PartTelemetry[] = [
  { sku: 'AT-9021', name: 'Turbine Blade Alpha', location: 'Hangar 4', status: 'Warehouse', lastUpdated: '10 mins ago' },
  { sku: 'AT-3304', name: 'Avionics Control Unit', location: 'Flight FX-202', status: 'In Transit', lastUpdated: '2 mins ago' },
  { sku: 'AT-8812', name: 'Hydraulic Actuator', location: 'Port Logistics', status: 'Delayed', lastUpdated: '1 hour ago' },
];

export default function DashboardPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-6">
      <header className="border-b pb-4">
        <h1 className="text-3xl font-bold tracking-tight">AeroTech Telemetry & Inventory</h1>
        <p className="text-gray-500 text-sm">Real-time aerospace asset tracking</p>
      </header>

      {/* Search Input Framework */}
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search by SKU or Component Name..."
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Telemetry Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {mockParts.map((part) => (
          <div key={part.sku} className="border rounded-lg p-4 shadow-sm bg-white space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-mono text-xs font-semibold text-gray-500">{part.sku}</span>
              <span
                className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
                  part.status === 'In Transit'
                    ? 'bg-blue-100 text-blue-800'
                    : part.status === 'Warehouse'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {part.status}
              </span>
            </div>
            <h3 className="font-semibold text-lg">{part.name}</h3>
            <p className="text-sm text-gray-600">Location: {part.location}</p>
            <p className="text-xs text-gray-400">Updated: {part.lastUpdated}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
