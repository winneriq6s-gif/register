"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateLimitService = exports.RatelimitService = void 0;
// rateLimit module for billing-service
const logger_1 = require("../utils/logger");
const DEFAULT_CONFIG = {
    enabled: true,
    timeout: 5000,
    retries: 3,
};
class RatelimitService {
    config;
    logger;
    constructor(config = {}) {
        this.config = { ...DEFAULT_CONFIG, ...config };
        this.logger = new logger_1.LoggerService("rateLimit");
    }
    async execute(input) {
        if (!this.config.enabled) {
            this.logger.warn("rateLimit is disabled");
            return null;
        }
        this.logger.info("Executing rateLimit", { input });
        await new Promise((resolve) => setTimeout(resolve, 10));
        return { ok: true, data: input };
    }
    getConfig() {
        return { ...this.config };
    }
}
exports.RatelimitService = RatelimitService;
exports.rateLimitService = new RatelimitService();

// pr-226 touch

// unique change for PR 218
