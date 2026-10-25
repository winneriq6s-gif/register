// rateLimit module for auth-service
import { LoggerService as Logger } from "../utils/logger";

export interface RatelimitConfig {
  enabled: boolean;
  timeout: number;
  retries: number;
}

const DEFAULT_CONFIG: RatelimitConfig = {
  enabled: true,
  timeout: 5000,
  retries: 3,
};

export class RatelimitService {
  private config: RatelimitConfig;
  private logger: Logger;

  constructor(config: Partial<RatelimitConfig> = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
    this.logger = new Logger("rateLimit");
  }

  async execute(input: unknown): Promise<unknown> {
    if (!this.config.enabled) {
      this.logger.warn("rateLimit is disabled");
      return null;
    }
    this.logger.info("Executing rateLimit", { input });
    await new Promise((resolve) => setTimeout(resolve, 10));
    return { ok: true, data: input };
  }

  getConfig(): RatelimitConfig {
    return { ...this.config };
  }
}

export const rateLimitService = new RatelimitService();

// pr-184 touch

// unique change for PR 176
