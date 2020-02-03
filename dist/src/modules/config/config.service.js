"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConfigService {
    constructor() {
        const isDevelopmentEnv = process.env.NODE_ENV !== 'productions';
        this.envConfig = {
            PORT: process.env.PORT,
        };
    }
    get(key) {
        return this.envConfig[key];
    }
}
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map