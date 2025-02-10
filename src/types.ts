export type ConfigSchema = {
  type: "object";
  properties: Record<string, unknown>;
  required?: string[];
  additionalProperties?: boolean;
};

export interface ConfiguredOptions {
  // Timing configurations
  workerIntervalMinutes?: number;
  redisExpirationSeconds?: number;
  
  // Database configurations
  schema?: string;
  tableName?: string;
}

export const DEFAULT_OPTIONS: ConfiguredOptions = {
  workerIntervalMinutes: 2,
  redisExpirationSeconds: 300,
  schema: 'public',
  tableName: 'configured'
}; 