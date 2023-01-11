interface IMongoConfig {
  Memory?: boolean;
  IP: string;
  Port: string | number;
  Database: string | null;
}

export const config: IMongoConfig = {
  IP: process.env.DB_HOST,
  Port: process.env.DB_PORT,
  Database: process.env.DB_NAME
}