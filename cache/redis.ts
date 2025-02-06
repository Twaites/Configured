import { Redis } from 'ioredis';
import '../config/env.js';

if (!process.env.REDIS_URL) {
  throw new Error("REDIS_URL is not set");
}

const redisClient = new Redis(process.env.REDIS_URL as string);

redisClient.on("error", (err) => {
  console.error("Redis error: ", err);
});

export default redisClient;
