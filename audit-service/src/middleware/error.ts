// error module for audit-service
import { LoggerService as Logger } from "../utils/logger";

export interface ErrorConfig {
  enabled: boolean;
  timeout: number;
  retries: number;
}

const DEFAULT_CONFIG: ErrorConfig = {
  enabled: true,
  timeout: 5000,
  retries: 3,
};

export class ErrorService {
  private config: ErrorConfig;
  private logger: Logger;

  constructor(config: Partial<ErrorConfig> = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
    this.logger = new Logger("error");
  }

  async execute(input: unknown): Promise<unknown> {
    if (!this.config.enabled) {
      this.logger.warn("error is disabled");
      return null;
    }
    this.logger.info("Executing error", { input });
    await new Promise((resolve) => setTimeout(resolve, 10));
    return { ok: true, data: input };
  }

  getConfig(): ErrorConfig {
    return { ...this.config };
  }
}

export const errorService = new ErrorService();

// pr-135 touch
