import { ConfigService } from './modules/config/config.service';
export declare class AppModule {
    private readonly _configService;
    static port: number | string;
    constructor(_configService: ConfigService);
}
