import Redis from "ioredis";
import '../config';

if (!process.env.REDIS_URL) {
  throw new Error("REDIS_URL is not set");
}

const redisClient: Redis = new Redis(process.env.REDIS_URL as string);

redisClient.on("error", (err) => {
  console.error("Redis error: ", err);
});

export default redisClient;
