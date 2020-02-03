import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../modules/config/config.module';
import { ConfigService } from '../modules/config/config.service';
import { ConnectionOptions } from 'typeorm';
import { Configuration } from '../modules/config/config.keys';
import { join } from 'path';

export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    async useFactory(config: ConfigService) {
      return {
        ssl: true,
        type: 'mysql' as 'mysql',
        host: 'remotemysql.com',
        username: 'bZgFfiI8s8',
        database: 'bZgFfiI8s8',
        password: 'H91gOp9Ajd',
        entities: ['dist/**/*.entity.js'],
        migrations: [__dirname + '/migrations/*{.ts,.js}'],
      } as ConnectionOptions;
    },
  }),
];
