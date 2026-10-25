// validation module for admin-console
import { LoggerService as Logger } from "../utils/logger";

export interface ValidationConfig {
  enabled: boolean;
  timeout: number;
  retries: number;
}

const DEFAULT_CONFIG: ValidationConfig = {
  enabled: true,
  timeout: 5000,
  retries: 3,
};

export class ValidationService {
  private config: ValidationConfig;
  private logger: Logger;

  constructor(config: Partial<ValidationConfig> = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
    this.logger = new Logger("validation");
  }

  async execute(input: unknown): Promise<unknown> {
    if (!this.config.enabled) {
      this.logger.warn("validation is disabled");
      return null;
    }
    this.logger.info("Executing validation", { input });
    await new Promise((resolve) => setTimeout(resolve, 10));
    return { ok: true, data: input };
  }

  getConfig(): ValidationConfig {
    return { ...this.config };
  }
}

export const validationService = new ValidationService();

// pr-044 touch

// pr-044 touch

// unique change for PR 40
