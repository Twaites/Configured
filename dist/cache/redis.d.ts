import { Redis } from 'ioredis';
import '../config/env.js';
declare const redisClient: Redis;
export default redisClient;
