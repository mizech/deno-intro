import { MongoClient } from "https://deno.land/x/mongo@v0.29.4/mod.ts";

const MONGO_URL = "mongodb://localhost:27017";

const client = new MongoClient();
client.connect(MONGO_URL);

console.log("mongoDb connected.");