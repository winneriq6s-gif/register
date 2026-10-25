// order module for audit-service
import { LoggerService as Logger } from "../utils/logger";

export interface OrderConfig {
  enabled: boolean;
  timeout: number;
  retries: number;
}

const DEFAULT_CONFIG: OrderConfig = {
  enabled: true,
  timeout: 5000,
  retries: 3,
};

export class OrderService {
  private config: OrderConfig;
  private logger: Logger;

  constructor(config: Partial<OrderConfig> = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
    this.logger = new Logger("order");
  }

  async execute(input: unknown): Promise<unknown> {
    if (!this.config.enabled) {
      this.logger.warn("order is disabled");
      return null;
    }
    this.logger.info("Executing order", { input });
    await new Promise((resolve) => setTimeout(resolve, 10));
    return { ok: true, data: input };
  }

  getConfig(): OrderConfig {
    return { ...this.config };
  }
}

export const orderService = new OrderService();

// pr-138 touch
