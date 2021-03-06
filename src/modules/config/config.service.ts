import * as fs from 'fs';
import { parse } from 'dotenv';
export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor() {
    const isDevelopmentEnv = process.env.NODE_ENV !== 'productions';
    console.log('----------------------------');
    console.log('----------------------------');
    console.log(process.env.PORT);
    console.log('----------------------------');
    console.log('----------------------------');
    console.log('----------------------------');

    this.envConfig = {
      PORT: process.env.PORT,
    };
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
