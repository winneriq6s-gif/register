// storage module for analytics-dashboard
import { LoggerService as Logger } from "../utils/logger";

export interface StorageConfig {
  enabled: boolean;
  timeout: number;
  retries: number;
}

const DEFAULT_CONFIG: StorageConfig = {
  enabled: true,
  timeout: 5000,
  retries: 3,
};

export class StorageService {
  private config: StorageConfig;
  private logger: Logger;

  constructor(config: Partial<StorageConfig> = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
    this.logger = new Logger("storage");
  }

  async execute(input: unknown): Promise<unknown> {
    if (!this.config.enabled) {
      this.logger.warn("storage is disabled");
      return null;
    }
    this.logger.info("Executing storage", { input });
    await new Promise((resolve) => setTimeout(resolve, 10));
    return { ok: true, data: input };
  }

  getConfig(): StorageConfig {
    return { ...this.config };
  }
}

export const storageService = new StorageService();

// pr-109 touch

// unique change for PR 103
