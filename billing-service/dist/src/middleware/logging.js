"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggingService = exports.LoggingService = void 0;
// logging module for billing-service
const logger_1 = require("../utils/logger");
const DEFAULT_CONFIG = {
    enabled: true,
    timeout: 5000,
    retries: 3,
};
class LoggingService {
    config;
    logger;
    constructor(config = {}) {
        this.config = { ...DEFAULT_CONFIG, ...config };
        this.logger = new logger_1.LoggerService("logging");
    }
    async execute(input) {
        if (!this.config.enabled) {
            this.logger.warn("logging is disabled");
            return null;
        }
        this.logger.info("Executing logging", { input });
        await new Promise((resolve) => setTimeout(resolve, 10));
        return { ok: true, data: input };
    }
    getConfig() {
        return { ...this.config };
    }
}
exports.LoggingService = LoggingService;
exports.loggingService = new LoggingService();

// pr-225 touch

// unique change for PR 217
