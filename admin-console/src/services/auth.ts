// auth module for admin-console
import { LoggerService as Logger } from "../utils/logger";

export interface AuthConfig {
  enabled: boolean;
  timeout: number;
  retries: number;
}

const DEFAULT_CONFIG: AuthConfig = {
  enabled: true,
  timeout: 5000,
  retries: 3,
};

export class AuthService {
  private config: AuthConfig;
  private logger: Logger;

  constructor(config: Partial<AuthConfig> = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
    this.logger = new Logger("auth");
  }

  async execute(input: unknown): Promise<unknown> {
    if (!this.config.enabled) {
      this.logger.warn("auth is disabled");
      return null;
    }
    this.logger.info("Executing auth", { input });
    await new Promise((resolve) => setTimeout(resolve, 10));
    return { ok: true, data: input };
  }

  getConfig(): AuthConfig {
    return { ...this.config };
  }
}

export const authService = new AuthService();

// pr-031 touch
