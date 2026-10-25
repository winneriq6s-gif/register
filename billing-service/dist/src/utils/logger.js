"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerService = exports.LoggerService = void 0;
// logger module for billing-service
const logger_1 = require("../utils/logger");
const DEFAULT_CONFIG = {
    enabled: true,
    timeout: 5000,
    retries: 3,
};
class LoggerService {
    config;
    logger;
    constructor(config = {}) {
        this.config = { ...DEFAULT_CONFIG, ...config };
        this.logger = new logger_1.LoggerService("logger");
    }
    async execute(input) {
        if (!this.config.enabled) {
            this.logger.warn("logger is disabled");
            return null;
        }
        this.logger.info("Executing logger", { input });
        await new Promise((resolve) => setTimeout(resolve, 10));
        return { ok: true, data: input };
    }
    getConfig() {
        return { ...this.config };
    }
}
exports.LoggerService = LoggerService;
exports.loggerService = new LoggerService();

// pr-244 touch

// unique change for PR 236
