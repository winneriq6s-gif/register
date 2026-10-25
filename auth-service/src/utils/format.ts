// format module for auth-service
import { LoggerService as Logger } from "../utils/logger";

export interface FormatConfig {
  enabled: boolean;
  timeout: number;
  retries: number;
}

const DEFAULT_CONFIG: FormatConfig = {
  enabled: true,
  timeout: 5000,
  retries: 3,
};

export class FormatService {
  private config: FormatConfig;
  private logger: Logger;

  constructor(config: Partial<FormatConfig> = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
    this.logger = new Logger("format");
  }

  async execute(input: unknown): Promise<unknown> {
    if (!this.config.enabled) {
      this.logger.warn("format is disabled");
      return null;
    }
    this.logger.info("Executing format", { input });
    await new Promise((resolve) => setTimeout(resolve, 10));
    return { ok: true, data: input };
  }

  getConfig(): FormatConfig {
    return { ...this.config };
  }
}

export const formatService = new FormatService();

// pr-200 touch

// unique change for PR 192
