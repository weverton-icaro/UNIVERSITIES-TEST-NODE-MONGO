import 'dotenv/config';

import { config } from '@config/configMongoTest';
import mongoose from "mongoose";

export async function connectDBForTesting(): Promise<void> {
  try {
    const dbUri = `mongodb://${config.IP}:${config.Port}`;
    const dbName = config.Database;
    mongoose.set('strictQuery', true);
    await mongoose.connect(dbUri, {
      dbName,
      autoCreate: true,
      directConnection: true
    });
  } catch (err) {
    console.log("DB connect error", err);
  }
}

export async function disconnectDBForTesting(): Promise<void> {
  try {
    await mongoose.connection.close();
  } catch (error) {
    console.log("DB disconnect error");
  }
}