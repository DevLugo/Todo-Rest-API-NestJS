import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../modules/config/config.module';
import { ConfigService } from '../modules/config/config.service';
import { ConnectionOptions } from 'typeorm';
import { Configuration } from '../modules/config/config.keys';

export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    async useFactory(config: ConfigService) {
      return {
        ssl: true,
        type: 'mysql' as 'mysql',
        host: config.get(Configuration.HOST),
        username: config.get(Configuration.USERNAME),
        database: config.get(Configuration.DATABASE),
        password: config.get(Configuration.PASSWORD),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/migrations/*{.ts,.js}'],
      } as ConnectionOptions;
    },
  }),
];
