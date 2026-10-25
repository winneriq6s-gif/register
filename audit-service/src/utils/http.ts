// http module for audit-service
import { LoggerService as Logger } from "../utils/logger";

export interface HttpConfig {
  enabled: boolean;
  timeout: number;
  retries: number;
}

const DEFAULT_CONFIG: HttpConfig = {
  enabled: true,
  timeout: 5000,
  retries: 3,
};

export class HttpService {
  private config: HttpConfig;
  private logger: Logger;

  constructor(config: Partial<HttpConfig> = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
    this.logger = new Logger("http");
  }

  async execute(input: unknown): Promise<unknown> {
    if (!this.config.enabled) {
      this.logger.warn("http is disabled");
      return null;
    }
    this.logger.info("Executing http", { input });
    await new Promise((resolve) => setTimeout(resolve, 10));
    return { ok: true, data: input };
  }

  getConfig(): HttpConfig {
    return { ...this.config };
  }
}

export const httpService = new HttpService();

// pr-154 touch

// unique change for PR 147
