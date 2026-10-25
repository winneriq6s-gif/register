// cors module for auth-service
import { LoggerService as Logger } from "../utils/logger";

export interface CorsConfig {
  enabled: boolean;
  timeout: number;
  retries: number;
}

const DEFAULT_CONFIG: CorsConfig = {
  enabled: true,
  timeout: 5000,
  retries: 3,
};

export class CorsService {
  private config: CorsConfig;
  private logger: Logger;

  constructor(config: Partial<CorsConfig> = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
    this.logger = new Logger("cors");
  }

  async execute(input: unknown): Promise<unknown> {
    if (!this.config.enabled) {
      this.logger.warn("cors is disabled");
      return null;
    }
    this.logger.info("Executing cors", { input });
    await new Promise((resolve) => setTimeout(resolve, 10));
    return { ok: true, data: input };
  }

  getConfig(): CorsConfig {
    return { ...this.config };
  }
}

export const corsService = new CorsService();

// pr-181 touch

// unique change for PR 173
