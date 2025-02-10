export type ConfigSchema = {
    type: "object";
    properties: Record<string, unknown>;
    required?: string[];
    additionalProperties?: boolean;
};
export interface ConfiguredOptions {
    workerIntervalMinutes?: number;
    redisExpirationSeconds?: number;
    schema?: string;
    tableName?: string;
}
export declare const DEFAULT_OPTIONS: ConfiguredOptions;
