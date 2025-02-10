**THIS IS STILL IN DEVELOPMENT AND NOT READY FOR PRODUCTION USE**

Configured
==========

Description
-----------

Configured synchronizes configurations across server clusters using server polling to ensure consistency and reliability. 


Installation
------------

Install the package via npm:

    npm install github:twaites/Configured

Prerequisites
-------------

*   **PostgreSQL**: Ensure you have a PostgreSQL database available.
*   **Redis**: A Redis instance is required for caching and synchronization.

I'm using Upstash for Redis.
I'm using Supabase for PostgreSQL.

### Environment Setup (.env) or Environment Variables

    DATABASE_URL=postgresql://username:password@localhost:5432/dbname
    REDIS_URL=redis://localhost:6379

Basic Usage
-----------

Below is an example of how to use the `Configured` module:

    import { Configured } from 'configured';
    
    // Define a configuration schema matching JSON Schema specification
    const configSchema = {
      type: "object",
      properties: {
        featureFlag: { type: "boolean" },
        apiUrl: { type: "string" },
        maxRetries: { type: "number" }
      },
      required: ["featureFlag", "apiUrl"]
    };
    
    // Initialize with an optional default configuration (as a JSON string)
    const configured = new Configured(
      machineName: string,
      configSchema: ConfigSchema,
      options?: ConfiguredOptions,
      defaultConfig?: string
    )
    
    // Start the configuration service. This will:
    // - Validate or create the necessary database table.
    // - Begin polling for configuration updates every 2 minutes.
    await configured.init();
    
    // Retrieve the current configuration
    const currentConfig = configured.get();
    console.log("Current Config:", currentConfig);
    

API Reference
-------------

### Constructor

    new Configured(
      machineName: string,
      configSchema: ConfigSchema,
      options?: ConfiguredOptions,
      defaultConfig?: string
    )
    

**Parameters:**

*   `machineName`: A unique identifier for your service instance.
*   `configSchema`: A JSON Schema object used to validate configurations.
*   `options`: Optional configuration settings:
  - `workerIntervalMinutes`: How often to check for updates (default: 2)
  - `redisExpirationSeconds`: Redis cache TTL (default: 300)
  - `schema`: Database schema name (default: 'public')
  - `tableName`: Database table name (default: 'configured')
*   `defaultConfig` (optional): A JSON string representing the initial configuration.

### Methods

*   **`init()`**: Initializes the service, validates/creates the database table, and starts the polling mechanism.
*   **`get()`**: Returns the current configuration (as a JSON string).
*   **`set(config: string)`**: Validates and updates the local configuration.

License
-------

MIT