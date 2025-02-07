import { ConfigSchema } from './types.js';
export declare class Configured {
    private readonly db;
    private cache;
    private machineName;
    private validator;
    private config;
    private lastConfiguredId;
    constructor(machineName: string, configSchema: ConfigSchema, defaultConfig?: string);
    init(): Promise<void>;
    get(): string;
    set(config: string): void;
    private validateDb;
    private worker;
}
