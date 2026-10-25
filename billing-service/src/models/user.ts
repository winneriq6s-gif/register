// user module for billing-service
import { LoggerService as Logger } from "../utils/logger";

export interface UserConfig {
  enabled: boolean;
  timeout: number;
  retries: number;
}

const DEFAULT_CONFIG: UserConfig = {
  enabled: true,
  timeout: 5000,
  retries: 3,
};

export class UserService {
  private config: UserConfig;
  private logger: Logger;

  constructor(config: Partial<UserConfig> = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
    this.logger = new Logger("user");
  }

  async execute(input: unknown): Promise<unknown> {
    if (!this.config.enabled) {
      this.logger.warn("user is disabled");
      return null;
    }
    this.logger.info("Executing user", { input });
    await new Promise((resolve) => setTimeout(resolve, 10));
    return { ok: true, data: input };
  }

  getConfig(): UserConfig {
    return { ...this.config };
  }
}

export const userService = new UserService();

// pr-278 touch

// unique change for PR 269
