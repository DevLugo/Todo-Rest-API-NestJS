"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("@nestjs/typeorm");
const config_module_1 = require("../modules/config/config.module");
const config_service_1 = require("../modules/config/config.service");
exports.databaseProviders = [
    typeorm_1.TypeOrmModule.forRootAsync({
        imports: [config_module_1.ConfigModule],
        inject: [config_service_1.ConfigService],
        async useFactory(config) {
            return {
                ssl: true,
                type: 'mysql',
                host: 'remotemysql.com',
                username: 'bZgFfiI8s8',
                database: 'bZgFfiI8s8',
                password: 'H91gOp9Ajd',
                entities: ['dist/**/*.entity.js'],
                migrations: [__dirname + '/migrations/*{.ts,.js}'],
            };
        },
    }),
];
//# sourceMappingURL=database.service.js.map