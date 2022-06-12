import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const options: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'mysql',
  port: 3306,
  username: 'user',
  password: 'password',
  database: 'develop',
  entities: ['dist/src/**/*.entity.js'],
  migrations: ['dist/migration/**/*.migration.js'],
  cli: {
    migrationsDir: 'migration',
  },
};

module.exports = options;
