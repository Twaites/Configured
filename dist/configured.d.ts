import { ConfigSchema, ConfiguredOptions } from './types.js';
export declare class Configured {
    private readonly db;
    private cache;
    private machineName;
    private validator;
    private config;
    private lastConfiguredId;
    private options;
    constructor(machineName: string, configSchema: ConfigSchema, options?: ConfiguredOptions, defaultConfig?: string);
    init(): Promise<void>;
    get(): string;
    set(config: string): Promise<boolean>;
    private validateDb;
    private worker;
}
