"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("@nestjs/typeorm");
const config_module_1 = require("../modules/config/config.module");
const config_service_1 = require("../modules/config/config.service");
const config_keys_1 = require("../modules/config/config.keys");
exports.databaseProviders = [
    typeorm_1.TypeOrmModule.forRootAsync({
        imports: [config_module_1.ConfigModule],
        inject: [config_service_1.ConfigService],
        async useFactory(config) {
            return {
                ssl: true,
                type: 'mysql',
                host: config.get(config_keys_1.Configuration.HOST),
                username: config.get(config_keys_1.Configuration.USERNAME),
                database: config.get(config_keys_1.Configuration.DATABASE),
                password: config.get(config_keys_1.Configuration.PASSWORD),
                entities: [__dirname + '/../**/*.entity{.ts}'],
                migrations: [__dirname + '/migrations/*{.ts}'],
            };
        },
    }),
];
//# sourceMappingURL=database.service.js.map