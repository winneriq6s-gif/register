"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsService = exports.CorsService = void 0;
// cors module for billing-service
const logger_1 = require("../utils/logger");
const DEFAULT_CONFIG = {
    enabled: true,
    timeout: 5000,
    retries: 3,
};
class CorsService {
    config;
    logger;
    constructor(config = {}) {
        this.config = { ...DEFAULT_CONFIG, ...config };
        this.logger = new logger_1.LoggerService("cors");
    }
    async execute(input) {
        if (!this.config.enabled) {
            this.logger.warn("cors is disabled");
            return null;
        }
        this.logger.info("Executing cors", { input });
        await new Promise((resolve) => setTimeout(resolve, 10));
        return { ok: true, data: input };
    }
    getConfig() {
        return { ...this.config };
    }
}
exports.CorsService = CorsService;
exports.corsService = new CorsService();

// pr-223 touch
