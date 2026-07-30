'use server';

export interface TelemetryData {
  partId: string;
  partName: string;
  temperatureCelsius: number;
  vibrationHz: number;
  pressurePsi: number;
  status: 'OPTIMAL' | 'WARNING' | 'CRITICAL';
  lastUpdated: string;
}

// Mock database / telemetry telemetry store
const mockTelemetryStore: Record<string, TelemetryData> = {
  'PART-001': {
    partId: 'PART-001',
    partName: 'Turbine Blade Alpha',
    temperatureCelsius: 645.2,
    vibrationHz: 42.1,
    pressurePsi: 101.3,
    status: 'OPTIMAL',
    lastUpdated: new Date().toISOString(),
  },
  'PART-002': {
    partId: 'PART-002',
    partName: 'Fuel Injection Nozzle',
    temperatureCelsius: 820.7,
    vibrationHz: 88.5,
    pressurePsi: 145.0,
    status: 'WARNING',
    lastUpdated: new Date().toISOString(),
  },
  'PART-003': {
    partId: 'PART-003',
    partName: 'Hydraulic Actuator Seal',
    temperatureCelsius: 95.4,
    vibrationHz: 12.0,
    pressurePsi: 3100.0,
    status: 'OPTIMAL',
    lastUpdated: new Date().toISOString(),
  },
};

/**
 * Server Action to fetch live telemetry status for a given part
 */
export async function getPartTelemetry(partId: string): Promise<TelemetryData> {
  // Simulate network latency (200ms)
  await new Promise((resolve) => setTimeout(resolve, 200));

  const data = mockTelemetryStore[partId];

  if (!data) {
    throw new Error(`Telemetry record for part ${partId} not found.`);
  }

  // Return telemetry payload with fresh timestamp
  return {
    ...data,
    lastUpdated: new Date().toISOString(),
  };
}

/**
 * Server Action to fetch telemetry for all tracked components
 */
export async function getAllTelemetry(): Promise<TelemetryData[]> {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return Object.values(mockTelemetryStore);
}
