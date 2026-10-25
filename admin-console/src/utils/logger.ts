// logger module for admin-console
import { LoggerService as Logger } from "../utils/logger";

export interface LoggerConfig {
  enabled: boolean;
  timeout: number;
  retries: number;
}

const DEFAULT_CONFIG: LoggerConfig = {
  enabled: true,
  timeout: 5000,
  retries: 3,
};

export class LoggerService {
  private config: LoggerConfig;
  private logger: Logger;

  constructor(config: Partial<LoggerConfig> = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
    this.logger = new Logger("logger");
  }

  async execute(input: unknown): Promise<unknown> {
    if (!this.config.enabled) {
      this.logger.warn("logger is disabled");
      return null;
    }
    this.logger.info("Executing logger", { input });
    await new Promise((resolve) => setTimeout(resolve, 10));
    return { ok: true, data: input };
  }

  getConfig(): LoggerConfig {
    return { ...this.config };
  }
}

export const loggerService = new LoggerService();

// pr-042 touch

// pr-042 touch
