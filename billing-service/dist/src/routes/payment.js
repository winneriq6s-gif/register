"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentService = exports.PaymentService = void 0;
// payment module for billing-service
const logger_1 = require("../utils/logger");
const DEFAULT_CONFIG = {
    enabled: true,
    timeout: 5000,
    retries: 3,
};
class PaymentService {
    config;
    logger;
    constructor(config = {}) {
        this.config = { ...DEFAULT_CONFIG, ...config };
        this.logger = new logger_1.LoggerService("payment");
    }
    async execute(input) {
        if (!this.config.enabled) {
            this.logger.warn("payment is disabled");
            return null;
        }
        this.logger.info("Executing payment", { input });
        await new Promise((resolve) => setTimeout(resolve, 10));
        return { ok: true, data: input };
    }
    getConfig() {
        return { ...this.config };
    }
}
exports.PaymentService = PaymentService;
exports.paymentService = new PaymentService();

// pr-233 touch
