// session module for audit-service
import { LoggerService as Logger } from "../utils/logger";

export interface SessionConfig {
  enabled: boolean;
  timeout: number;
  retries: number;
}

const DEFAULT_CONFIG: SessionConfig = {
  enabled: true,
  timeout: 5000,
  retries: 3,
};

export class SessionService {
  private config: SessionConfig;
  private logger: Logger;

  constructor(config: Partial<SessionConfig> = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
    this.logger = new Logger("session");
  }

  async execute(input: unknown): Promise<unknown> {
    if (!this.config.enabled) {
      this.logger.warn("session is disabled");
      return null;
    }
    this.logger.info("Executing session", { input });
    await new Promise((resolve) => setTimeout(resolve, 10));
    return { ok: true, data: input };
  }

  getConfig(): SessionConfig {
    return { ...this.config };
  }
}

export const sessionService = new SessionService();

// pr-141 touch
