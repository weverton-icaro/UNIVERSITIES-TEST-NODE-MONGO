import { config } from '@config/configMongoTest';
import * as mongoose from 'mongoose';

mongoose.set('strictQuery', false)

export const connect = async (): Promise<void> => {
  const dbUri = `mongodb://${config.IP}:${config.Port}`;
  const dbName = config.Database;
  await mongoose.connect(dbUri, {
    dbName,
    autoCreate: true,
    directConnection: true
  });
};
