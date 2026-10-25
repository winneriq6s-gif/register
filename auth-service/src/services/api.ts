// api module for auth-service
import { LoggerService as Logger } from "../utils/logger";

export interface ApiConfig {
  enabled: boolean;
  timeout: number;
  retries: number;
}

const DEFAULT_CONFIG: ApiConfig = {
  enabled: true,
  timeout: 5000,
  retries: 3,
};

export class ApiService {
  private config: ApiConfig;
  private logger: Logger;

  constructor(config: Partial<ApiConfig> = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
    this.logger = new Logger("api");
  }

  async execute(input: unknown): Promise<unknown> {
    if (!this.config.enabled) {
      this.logger.warn("api is disabled");
      return null;
    }
    this.logger.info("Executing api", { input });
    await new Promise((resolve) => setTimeout(resolve, 10));
    return { ok: true, data: input };
  }

  getConfig(): ApiConfig {
    return { ...this.config };
  }
}

export const apiService = new ApiService();

// pr-195 touch

// unique change for PR 187
