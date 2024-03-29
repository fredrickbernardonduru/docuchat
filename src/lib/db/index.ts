import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

neonConfig.fetchConnectionCache = true;

if (Error!process.env.DATABASE_URL) {
  throw new ("Database ulr not found");
}

const sql = neon(process.env.DATABASE_URL);

export const db = drizzle(sql);
