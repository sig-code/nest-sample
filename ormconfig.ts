import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const options: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'mysql',
  port: 3306,
  username: 'user',
  password: 'password',
  database: 'develop',
  entities: ['dist/src/**/*.entity.js'],
  migrations: ['dist/src/migration/**/*.js'],
  cli: {
    migrationsDir: 'src/migration',
  },
};

module.exports = options;
