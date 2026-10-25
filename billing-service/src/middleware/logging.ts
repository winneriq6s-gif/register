// logging module for billing-service
import { LoggerService as Logger } from "../utils/logger";

export interface LoggingConfig {
  enabled: boolean;
  timeout: number;
  retries: number;
}

const DEFAULT_CONFIG: LoggingConfig = {
  enabled: true,
  timeout: 5000,
  retries: 3,
};

export class LoggingService {
  private config: LoggingConfig;
  private logger: Logger;

  constructor(config: Partial<LoggingConfig> = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
    this.logger = new Logger("logging");
  }

  async execute(input: unknown): Promise<unknown> {
    if (!this.config.enabled) {
      this.logger.warn("logging is disabled");
      return null;
    }
    this.logger.info("Executing logging", { input });
    await new Promise((resolve) => setTimeout(resolve, 10));
    return { ok: true, data: input };
  }

  getConfig(): LoggingConfig {
    return { ...this.config };
  }
}

export const loggingService = new LoggingService();

// pr-272 touch
